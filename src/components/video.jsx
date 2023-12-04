import '../assets/styles/video.css'
import thumbnail from '../assets/images/thumbnail.jpeg'
import pfp from '../assets/images/pfp.jpeg'
import { Link } from 'react-router-dom';
const Video=({resetSidebar})=>{
    return(
        <>
        <Link onClick={resetSidebar} to="/video">
            <div className="video">
                <div className="thumbnail">
                    <div className="vid-tt">3:00</div>
                    <img src={thumbnail} alt="" />
                </div>
                <div className="vid-details">
                    <div className="vid-pfp">
                        <img src={pfp} alt="" />
                    </div>
                    <div className="vid-info">
                        <div className="vid-title">Bruhmius.</div>
                        <div className="vid-info-er">
                            <div className="vid-author-div">
                                <div className="vid-author">Omer Farooq</div>
                                <svg className="vid-verification" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14" focusable="false"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path></svg>
                            </div>
                            <div className="vid-stats-div">
                                <div className="vid-views">100M views</div>
                                <div className="vid-dot"></div>
                                <div className="vid-time-elapsed">3 months ago</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}
export default Video;