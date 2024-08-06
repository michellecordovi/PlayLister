import { initiateAuth } from "./authRequest";
import { getToken } from "./authRequest";

const checkAuthCode = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
  
    if (code) {
      const accessToken = await getToken(code);
      if (accessToken) {
        console.log("Access token obtained:", accessToken);
        return accessToken;
      } else {
        console.error("Failed to obtain access token.");
      }
    } else {
      initiateAuth();
    }
};

export default checkAuthCode;