/* eslint-disable react/prop-types */
import checkAuthCode from "../APIAuthorization/checkAuthorization";

function LoginButton() {
    function handleClick() {
        checkAuthCode()
    }

     return (
        <button id="login-button" onClick={handleClick} >
            <span>Login with</span>
            <img src="../../spotify-icons-logos/logos/Spotify_Logo_CMYK_Green.png" alt="spotify logo" />
        </button>
    )
}

export default LoginButton;