import Nav from './Nav';
import Banner from './Banner';

const header = {
    height: "100vh",
    backgroundImage: "url('/images/banner-background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
}

function Header () {
    return (
        <header style={header}>
            <Nav/>
            <Banner/>
        </header>
    )
}

export default Header;