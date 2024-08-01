import SearchBar from './SearchBar';

function Banner() {
    return(
        <section id="banner">
            <div className="banner-title-box">
                <h1>PlayLister</h1>
                <h2>create your ultimate playlist</h2>
            </div>
            <SearchBar/>
        </section>
    )
}

export default Banner