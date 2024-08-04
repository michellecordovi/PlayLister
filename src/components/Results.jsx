/* eslint-disable react/prop-types */
import Tracklist from './Tracklist';

function Results({tracks, onAddTrack}){
    return (
        <section className="results-section">
            <h3>Search Results</h3>
            <Tracklist tracks={tracks} onAddTrack={onAddTrack} />
        </section>
    )
}

export default Results;