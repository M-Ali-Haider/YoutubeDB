import '../assets/styles/video.css'
import thumbnail from '../assets/images/thumbnail.jpeg'
import pfp from '../assets/images/pfp.jpeg'

const Video=()=>{
    return(
        <>
            <div className="video">
                <img className='thumbnail' src={thumbnail} alt="" />
                <div className="vid-details">
                    <div className="vid-pfp">
                        <img src={pfp} alt="" />
                    </div>
                    <div className="vid-info">
                        <div className="vid-title">CR and Siraiki Caught in Action (4K 1080pHD)</div>
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
        </>
    )
}
export default Video;