function PlaylistTrack (props){
    return (
        <div className="track">
            <img className="album-cover" src={props.src} alt={props.album + " cover."} />
            <div className="track-info">
                <h4>{props.song}</h4>
                <p>{`${props.artist} | ${props.album}`}</p>
            </div>
            <div className="delete-track-button" onClick={props.onDeleteTrack}>x</div>
        </div>
    )
}

export default PlaylistTrack;