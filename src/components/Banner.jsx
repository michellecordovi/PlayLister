import SearchBar from './SearchBar';

function Banner() {
    return(
        <section id="banner">
            <div>
                <h1>PlayLister</h1>
                <p>create your ultimate personal playlist</p>
            </div>
            <SearchBar/>
        </section>
    )
}

export default Banner