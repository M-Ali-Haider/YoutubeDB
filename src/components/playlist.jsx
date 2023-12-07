import '../assets/styles/playlist.css'
import PlaylistUnit from './playlistUnit'
const Playlist=()=>{
    return(
        <>
        <div className="playlist">
            <div className="playlist-heading">
                <div className="playlist-title">Learning React by Making YouTube Replica more more more</div>
            </div>
            <div className="playlist-videos">
                <PlaylistUnit />
                <PlaylistUnit />
                <PlaylistUnit />
                <PlaylistUnit />
                <PlaylistUnit />
                <PlaylistUnit />
                <PlaylistUnit />
                <PlaylistUnit />
                <PlaylistUnit />
                <PlaylistUnit />
                <PlaylistUnit />
            </div>
        </div>
        </>
    )
}
export default Playlist