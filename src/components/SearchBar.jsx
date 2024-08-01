const input = {
    padding: "5px 30px",
    backgroundColor:"#2C344B",
    color: "white",
    fontSize: 18,
    height: 60,
    width: 350,
    borderRadius: 30,
    border: "none"
}

function SearchBar(){
    return (
        <form>
            <input style={input} id="searchInput" type="text" placeholder="Search Artist, Song, Album, etc..."/>
            <input type="submit" value="Search"/>
        </form>
    )
}

export default SearchBar