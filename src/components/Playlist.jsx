/* eslint-disable react/prop-types */
import PlaylistTrack from './PlaylistTrack'

function Playlist({playlistTracks, onDeleteTrack}){
    return (
        <section className="playlist-section">
            <form>
                <input id="playlist-name-input" type="text" placeholder="Name your playlist..." />
                <input id="playlist-submit" type="submit" value="Create Playlist"/>
            </form>

        <div className="tracklist">
           {playlistTracks.map((track)=> (
            <PlaylistTrack key={track.id} artist={track.artist} song={track.name} album={track.album} src={track.src} onDeleteTrack={onDeleteTrack} />
           ))}
        </div>

        </section>
    )
}

export default Playlist;