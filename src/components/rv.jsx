import '../assets/styles/rv.css'
import pfp from '../assets/images/pfp.jpeg'

const RV=()=>{
    return(
        <>
        <div className="rv-unit">
            <div className="rv-image-div">
                <img src={pfp} alt="" />
            </div>
            <div className="rv-details">
                <div className="rv-pfp">
                    <img src={pfp} alt="" />
                </div>
                <div className="rv-rest">
                    <div className="rv-title">CR and Siraiki Caught in Action (4k 1080pHD)</div>
                    <div className="rv-author">Omer Farooq</div>
                    <div className="rv-stats">
                        <div className="rv-views">10M views</div>
                        <div className="rm-time-elapsed">1 hour ago</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default RV