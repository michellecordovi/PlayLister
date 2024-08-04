/* eslint-disable react/prop-types */
import Results from './Results';
import Playlist from "./Playlist";

function ResultsSection({tracks, onAddTrack, playlistTracks}) {
    return (
        <main>
            <Results tracks={tracks} onAddTrack={onAddTrack} />
            <Playlist playlistTracks={playlistTracks}/>
        </main>
    )
}

export default ResultsSection;