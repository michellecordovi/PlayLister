/* eslint-disable react/prop-types */
import Track from './Track'

function Results({tracks, onAddTrack}){
    return (
        <section className="results-section">
            <h3>Search Results</h3>

            <div className="tracklist">
                {tracks.map((track)=> (
                    <Track key={track.id} artist={track.artists[0].name} song={track.name} album={track.album.name} src={track.album.images[0].url} onAddTrack={()=> onAddTrack(track)} />
                ))}
            </div>
        </section>
    )
}

export default Results;