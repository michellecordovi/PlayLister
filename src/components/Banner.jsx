import SearchBar from './SearchBar';

function Banner({searchResults, setSearchResults}) {
    return(
        <section id="banner">
            <div className="banner-title-box">
                <h1>PlayLister</h1>
                <h2>create your ultimate playlist</h2>
            </div>
            <SearchBar searchResults = {searchResults} setSearchResults={setSearchResults}/>
        </section>
    )
}

export default Banner