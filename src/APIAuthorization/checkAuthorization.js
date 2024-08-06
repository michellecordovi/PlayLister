import { initiateAuth } from "./authRequest";
import { getToken } from "./authRequest";

const checkAuthCode = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
  
    if (code) {
      const accessToken = await getToken(code);
      alert(`your access token is ${localStorage.access_token}`)
      return accessToken;
    } else {
      initiateAuth();
    }
};

export default checkAuthCode;