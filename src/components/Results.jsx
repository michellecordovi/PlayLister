/* eslint-disable react/prop-types */
import Tracklist from './Tracklist';

function Results({tracks}){
    return (
        <section className="results-section">
            <h3>Search Results</h3>
            <Tracklist tracks={tracks}/>
        </section>
    )
}

export default Results;