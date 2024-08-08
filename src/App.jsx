import {useState, useEffect} from 'react';
import Header from './components/Header'
import ResultsSection from "./components/ResultsSection";

function App() {
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [searchResults, setSearchResults] = useState([])

    let tracks = searchResults;

    useEffect(()=> {
        console.log(tracks)
    }, [tracks])

    useEffect(()=> {
        console.log(playlistTracks)
    }, [playlistTracks])

    function addTrackToPlaylist (track){
        setPlaylistTracks((prevTracks) => {
           return [...prevTracks, track]
        })
    }

    function removeTrackFromPlaylist(track){
        setPlaylistTracks((prevTracks) => {
            return prevTracks.filter(currentTrack => currentTrack.id !== track.id)
        })
    }

    return (
        <>        
            <Header searchResults = {searchResults} setSearchResults={setSearchResults}/>
            <ResultsSection tracks={tracks} playlistTracks={playlistTracks} onAddTrack={addTrackToPlaylist}  onDeleteTrack={removeTrackFromPlaylist}/>
        </>
    )
}

export default App
