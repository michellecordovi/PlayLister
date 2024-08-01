import SearchBar from './SearchBar';

const banner = {
    height: "80%",
    display: "grid",
    gridTemplateColumns: "1fr",
    alignItems:"center"
}


const titleBox = {
    alignSelf: "center"
    // backgroundColor: "hsla(224, 25%, 11%, 80%)",
    // width: "fit-content",
    // padding: 40,
    // borderRadius: 10
}

const title = {
    fontSize: 100,
    letterSpacing: 18,
    marginBottom: 30
}

const description = {
    fontSize: 30,
    letterSpacing: 8,
    fontWeight: 400
}



function Banner() {
    return(
        <section style={banner}>
            <div style={titleBox}>
                <h1 style= {title}>PlayLister</h1>
                <h2 style={description}>create your ultimate personal playlist</h2>
            </div>
            <SearchBar/>
        </section>
    )
}

export default Banner