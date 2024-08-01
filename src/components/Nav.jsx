import LoginButton from './LoginButton';

const nav = {
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
}
function Nav() {
    return (
        <nav style={nav}>
                    <LoginButton/>
        </nav>
    )
}

export default Nav;