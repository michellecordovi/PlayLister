function SearchBar(){
    return (
        <form>
            <input id="searchInput" type="text" placeholder="Search Artist, Song, Album, etc..."/>
            <input id="searchInputSubmit" type="submit" value="Search"/>
        </form>
    )
}

export default SearchBar