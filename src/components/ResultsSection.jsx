/* eslint-disable react/prop-types */
import Results from './Results';
import Playlist from "./Playlist";

function ResultsSection({tracks, onAddTrack, playlistTracks, onDeleteTrack}) {
    return (
        <main>
            <Results tracks={tracks} onAddTrack={onAddTrack} />
            <Playlist playlistTracks={playlistTracks} onDeleteTrack={onDeleteTrack}/>
        </main>
    )
}

export default ResultsSection;