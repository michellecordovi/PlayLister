import getToken from './authRequest';
import initiateAuth from './authRequest'

export const checkAuthCode = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
  
    if (code) {
      const accessToken = await getToken(code);
      console.log("Access Token:", accessToken);
    } else {
      initiateAuth();
    }
  };
  
checkAuthCode();
console.log(localStorage.access_token);