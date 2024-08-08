const generateRandomString = (length) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  return hashBuffer;
};

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};


export const initiateAuth = async () => {
  const codeVerifier = generateRandomString(64);
  const hashBuffer = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashBuffer);

  const clientId = "1878e5a6287e4a42a9857eaa292f8385";
  const redirectUri = "http://localhost:5173/";
  const scope = "user-read-private user-read-email";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  window.localStorage.setItem("code_verifier", codeVerifier);

  const params = {
    response_type: "code",
    client_id: clientId,
    scope,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
};

export const getToken = async (code) => {
  const codeVerifier = localStorage.getItem("code_verifier");
  const clientId = "1878e5a6287e4a42a9857eaa292f8385";
  const redirectUri = "http://localhost:5173/"; // Ensure this matches the registered redirect URI
  const tokenUrl = "https://accounts.spotify.com/api/token";

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  };

  try {
    const response = await fetch(tokenUrl, payload);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response:', errorData);
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      localStorage.setItem("token_expiry", Date.now() + (data.expires_in * 1000)); // Convert seconds to milliseconds
    }
    return data.access_token;
  } catch (error) {
    console.error('Error:', error);
  }
};


//GET REFRESH TOKEN
export const getRefreshToken = async () => {
  const clientId = "1878e5a6287e4a42a9857eaa292f8385";
  const refreshToken = localStorage.getItem('refresh_token');
  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId
    }),
  };

  const response = await fetch(url, payload);
  const data = await response.json();

  if (response.ok) {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token); // Update if needed
    localStorage.setItem('token_expiry', Date.now() + (data.expires_in * 1000)); // Update expiry time
  } else {
    console.error('Failed to refresh token', data);
    // Redirect to login or prompt user to re-authenticate
    window.location.href = '/login'; // Adjust as needed
  }
};


export const checkAndRefreshToken = async () => {
  const tokenExpiry = localStorage.getItem('token_expiry');
  const currentTime = Date.now();

  if (tokenExpiry && currentTime >= tokenExpiry) {
      // Token is expired, refresh it
      await getRefreshToken();
  } else{
    console.log("Your authorization token has not yet expired", localStorage.access_token)
  }
};