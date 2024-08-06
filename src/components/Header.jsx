import Nav from './Nav';
import Banner from './Banner';

function Header ({searchResults, setSearchResults}) {
    return (
        <header>
            <Nav/>
            <Banner searchResults = {searchResults} setSearchResults={setSearchResults}/>
        </header>
    )
}

export default Header;