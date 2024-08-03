function Playlist(){
    return (
        <section className="playlist-section">
            <form>
                <input id="playlist-name-input" type="text" placeholder="Name your playlist..." />
                <input id="playlist-submit" type="submit" value="Create Playlist"/>
            </form>
        </section>
    )
}

export default Playlist;