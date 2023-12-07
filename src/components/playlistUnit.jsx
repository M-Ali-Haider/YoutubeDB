import pfp from '../assets/images/pfp.jpeg'
const PlaylistUnit=()=>{
    return(
        <>
        <div className="playlist-unit">
            <div className="playlist-image-div">
                <img src={pfp} alt="" />
            </div>
            <div className="rv-details">
                <div className="rv-pfp">
                    <img src={pfp} alt="" />
                </div>
                <div className="rv-rest">
                    <div className="rv-title">Learning React by Making YouTube Replica</div>
                    <div className="rv-author">Omer Farooq</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default PlaylistUnit;