/* eslint-disable react/prop-types */
import { initiateAuth, getToken } from "../APIAuthorization/authRequest";
import checkAuthCode from "../APIAuthorization/checkAuthorization";


function LoginButton() {
    async function handleClick() {
        const storedToken = localStorage.getItem("access_token");
        if (!storedToken || storedToken === "undefined") {
          await checkAuthCode();
        } else {
          console.log("Access token already exists:", storedToken);
        }
      }

    return (
        <button id="login-button" onClick={handleClick} >
            <span>Login with</span>
            <img src="../../spotify-icons-logos/logos/Spotify_Logo_CMYK_Green.png" alt="spotify logo" />
        </button>
    )
}

export default LoginButton;