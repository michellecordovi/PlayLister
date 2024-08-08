import { initiateAuth, getToken, checkAndRefreshToken } from "../APIAuthorization/authRequest";

function LoginButton() {
    async function handleClick() {
      const accessToken = localStorage.getItem("access_token")
      if(!accessToken){
        await initiateAuth();
      } else {
        await checkAndRefreshToken()
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