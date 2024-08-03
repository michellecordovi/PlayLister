/* eslint-disable react/prop-types */
import Track from "./Track";

function Tracklist({tracks}){
    return (
        <div className="tracklist">
           {tracks.map((track)=> (
            <Track key={track.id} artist={track.artist} song={track.name} album={track.album} src={track.src}/>
           ))}
        </div>
    )
}

export default Tracklist;