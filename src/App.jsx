import {useState} from 'react';
import Header from './components/Header'
import ResultsSection from "./components/ResultsSection";

function App() {
    const [playlistTracks, setPlaylistTracks] = useState([]);

    const tracks = [
        {
            id: 1,
            name: "Pink Pony Club",
            artist: "Chappel Roan",
            album: "The Rise and Fall of a Midwest Princess",
            src: 'https://media.pitchfork.com/photos/64ff1676931354660ba71d8b/master/w_1280%2Cc_limit/Chappell-Roan-Princess.jpg'
        },

        {
            id: 2,
            name: "Born Under Punches",
            artist: "Talking Heads",
            album: "Remain In Light",
            src: "https://upload.wikimedia.org/wikipedia/en/2/2d/TalkingHeadsRemaininLight.jpg"
        }
    ]

    function addTrackToPlaylist (track){
        setPlaylistTracks((prevTracks) => {
           return [...prevTracks, track]
        })
    }

    function removeTrackFromPlaylist(track){
        setPlaylistTracks((prevTracks) => {
            let indexOfTrack = prevTracks.indexOf(track);
            return prevTracks.splice(indexOfTrack, 1)
        })
    }

    return (
        <>        
            <Header/>
            <ResultsSection tracks={tracks} playlistTracks={playlistTracks} onAddTrack={addTrackToPlaylist}  onDeleteTrack={removeTrackFromPlaylist}/>
        </>
    )
}

export default App
