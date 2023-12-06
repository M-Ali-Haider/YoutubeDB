import pfp from '../assets/images/pfp.jpeg';
const Short=()=>{
    return(
        <>
            <div className="shorts-slide">
                <div className="shorts-image">
                    <img src={pfp} alt="" />
                </div>
                <div className="shorts-detail">
                    <p className="shorts-title">Learning React by Creating Youtube Replica</p>
                    <div className="shorts-views">100M views</div>
                </div>
            </div>
        </>
    )
}
export default Short;