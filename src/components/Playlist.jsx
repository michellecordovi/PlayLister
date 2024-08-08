/* eslint-disable react/prop-types */
import {useState} from 'react'
import PlaylistTrack from './PlaylistTrack'

function Playlist({playlistTracks, onDeleteTrack}){
    const [playlistName, setPlaylistName] = useState("")
    let userId= "";
    let playlistId = "";
    let newPlaylistUris = playlistTracks.map(track => {
        return track.uri
    })

    function changePlaylistName() {
        setPlaylistName(document.getElementById("playlist-name-input").value)
    }

    async function getUserId(){
        const accessToken = localStorage.access_token
        const url = 'https://api.spotify.com/v1/me'

        //this will get the user's ID
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });
        
          if(response.ok){
            const data = await response.json()
            userId = data.id
            console.log(userId)
          } else {
            console.error('Search request failed', response.status, response.statusText)
          }
    }

    async function createPlaylist(name) {
        const accessToken = localStorage.access_token;
        const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    description: "new playlist",
                    public: false,
                    collaborative: true
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                playlistId = data.id;
                console.log("Playlist ID:", playlistId);
                console.log(playlistTracks);
                console.log(newPlaylistUris)
            } else {
                // Ensure the response body is parsed to handle error data
                const errorData = await response.json();
                console.error('Playlist creation failed', response.status, response.statusText, errorData);
            }
        } catch (error) {
            console.error('Network or other error occurred', error);
        }
    }

    async function addItemsToPlaylist(){
        const accessToken = localStorage.access_token;
        const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uris: newPlaylistUris,
                    position: 0
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log(data.snapshot_id)
            } else {
                // Ensure the response body is parsed to handle error data
                const errorData = await response.json();
                console.error('Playlist creation failed', response.status, response.statusText, errorData);
            }
        } catch (error) {
            console.error('Network or other error occurred', error);
        }
    }
    
    async function handleCreatePlaylist(event) {
        event.preventDefault();
        await getUserId();
        await createPlaylist(document.getElementById("playlist-name-input").value);
        await addItemsToPlaylist();
    }

    return (
        <section className="playlist-section">
            <form onSubmit={handleCreatePlaylist}>
                <input id="playlist-name-input" type="text" placeholder="Name your playlist..." value={playlistName} onChange={changePlaylistName}/>
                <input id="playlist-submit" type="submit" value="Create Playlist"/>
            </form>

        <div className="tracklist">
           {playlistTracks.map((track)=> (
            <PlaylistTrack key={track.id} artist={track.artists[0].name} song={track.name} album={track.album.name} src={track.album.images[0].url} uri={track.uri} onDeleteTrack={onDeleteTrack} />
           ))}
        </div>

        </section>
    )
}

export default Playlist;