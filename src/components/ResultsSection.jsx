/* eslint-disable react/prop-types */
import Results from './Results';
import Playlist from "./Playlist";

function ResultsSection({tracks}) {
    return (
        <main>
            <Results tracks={tracks}/>
            <Playlist/>
        </main>
    )
}

export default ResultsSection;