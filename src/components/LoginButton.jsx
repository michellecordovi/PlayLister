/* eslint-disable react/prop-types */
import { initiateAuth, getToken } from "../APIAuthorization/authRequest";
import checkAuthCode from "../APIAuthorization/checkAuthorization";


function LoginButton() {
    async function handleClick() {
        initiateAuth();
        console.log(localStorage.access_token)
    }

    return (
        <button id="login-button" onClick={handleClick} >
            <span>Login with</span>
            <img src="../../spotify-icons-logos/logos/Spotify_Logo_CMYK_Green.png" alt="spotify logo" />
        </button>
    )
}

export default LoginButton;