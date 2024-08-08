import { useState, useEffect } from "react";
import { checkAndRefreshToken } from "../APIAuthorization/authRequest";

function SearchBar({searchResults, setSearchResults}){
    const [searchInput, setSearchInput] = useState('');
    const baseUrl = 'https://api.spotify.com/v1/search/'

    const handleSearchClick = async (event) => {
        event.preventDefault();
      
        await checkAndRefreshToken();

        const accessToken = localStorage.getItem('access_token')
        const url = `${baseUrl}?q=${encodeURIComponent(searchInput)}&type=track&limit=10`;
      
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.tracks.items);
        } else {
          console.error('Search request failed', response.status, response.statusText);
        }
      };
    
    useEffect(() => {
     console.log(searchInput);
    }, [searchInput]);


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