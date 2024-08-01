const loginButton = {
    width: "auto",
    height: "50px",
    padding: "1.5rem",
    fontSize: 16,
    backgroundColor: "black",
    color: "white",
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: 40,
    cursor: "pointer"
}

const image= {
    height: 26
}

function LoginButton() {
    return (
        <button style={loginButton}>
            <span>Login with</span>
            <img style={image} src="../../spotify-icons-logos/logos/Spotify_Logo_CMYK_Green.png" alt="spotify logo" />
        </button>
    )
}

export default LoginButton;