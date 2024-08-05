/* eslint-disable react/prop-types */
import Track from './Track'

function Results({tracks, onAddTrack}){
    return (
        <section className="results-section">
            <h3>Search Results</h3>

            <div className="tracklist">
                {tracks.map((track)=> (
                    <Track key={track.id} artist={track.artist} song={track.name} album={track.album} src={track.src} onAddTrack={()=> onAddTrack(track)} />
                ))}
            </div>
        </section>
    )
}

export default Results;