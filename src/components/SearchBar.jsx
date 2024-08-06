import { useState, useEffect } from "react";

function SearchBar(){
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([])
    const baseUrl = 'https://api.spotify.com/v1/search/'

    const handleSearchClick = async (event) => {
        event.preventDefault();
    
        const url = `${baseUrl}?q=${encodeURIComponent(searchInput)}&type=track&limit=10`;
    
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.access_token}`,
            'Content-Type': 'application/json'
          }
        });
    
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.tracks.items); // Set the search results to the track items
        } else {
          console.error('Search request failed', response.status, response.statusText);
        }
      };
    
      useEffect(() => {
        console.log(searchResults);
      }, [searchResults]);

    function handleInputChange(event) {
        setSearchInput(event.target.value);
    }

    return (
        <form onSubmit={handleSearchClick}>
            <input id="searchInput" type="text" placeholder="Search Artist, Song, Album, etc..." value={searchInput} onChange={handleInputChange}/>
            <input id="searchInputSubmit" type="submit" value="Search"/>
        </form>
    )
}

export default SearchBar;