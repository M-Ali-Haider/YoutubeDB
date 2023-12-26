import '../assets/styles/videopage.css'
import pfp from '../assets/images/pfp.jpeg'
import dislike from '../assets/images/dislike.svg'
import share from '../assets/images/share.svg'
import TagsSwiper from './tagsSwiper'
import RV from './rv'
import SidebarOpen from './sidebar/sidebaropen'
import CommentSection from './commentsec'
import ShortsVP from './shortsVP'
import Playlist from './playlist'
import threedots from '../assets/images/threedots.svg'
import download from '../assets/images/download.svg'

const VideoPage=({isSidebarOpen})=>{
    const tagsNumber=4.8;
    return(
        <>
        <div className={`slideSidebar ${isSidebarOpen ? 'slideSidebarOpen' : ''}`}>
            <SidebarOpen />
        </div>
        <div className="videopage">
            <div className="videopage-helper">
                <div className="videopage-first">
                    <video className='mv' src=""></video>
                    <div className="mv-mobile-view-something">
                        <h2 className='mv-title'>Learning React by creating YoutubeDB Replica</h2>
                        <div className="mv-buttons">
                            <div className="mv-buttons-first">
                                <div className='mv-buttons-first-helper'>
                                    <div className="mv-pfp"><img src={pfp} alt="" /></div>
                                    <div className="mv-channel">
                                        <div className="mv-channel-name">Omer Farooq</div>
                                        <div className="mv-subs">8.72M subscribers</div>
                                    </div>
                                </div>
                                <div className="mv-subscribe-button">Subscribe</div>
                            </div>
                            <div className="mv-buttons-second">
                                <div className="mv-button">
                                    <div className="mv-like mv-total-like">
                                        <img className='rotate-like' src={dislike} alt="" />
                                        <div>361k</div>
                                    </div>
                                    <div className="mv-like">
                                        <img src={dislike} alt="" />
                                    </div>
                                </div>
                                <div className="mv-button">
                                    <div className="mv-like">
                                        <img src={share} alt="" />
                                        <div>Share</div>
                                    </div>
                                </div>
                                <div className="mv-button">
                                    <div className="mv-like">
                                        <img src={download} alt="" />
                                        <div>Download</div>
                                    </div>
                                </div>
                                <div className="mv-button">
                                    <div className="mv-dots">
                                        <img src={threedots} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mv-desc">
                            <div className="mv-desc-analytics">
                                <div className="mv-desc-views">34M views</div>
                                <div className="mv-desc-time-elapsed">3 years ago</div>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est impedit sint beatae maiores voluptate id sit? Esse assumenda perferendis repellendus itaque, sunt illo quisquam similique doloribus cum atque aperiam deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis iusto, eum accusantium odit possimus minus commodi repellat alias ipsa. Officia sapiente accusantium sed repellendus, incidunt laudantium ducimus dignissimos! Unde!</p>
                        </div>
                        <div className="mv-comments">
                            <CommentSection />
                        </div>
                    </div>
                </div>
                <div className="videopage-second">
                    <Playlist />
                    <div className="videopage-second-tags">
                        <TagsSwiper tagsNumber={tagsNumber}/>
                    </div>
                    <div className="rv-grid">
                        <RV />
                        <RV />
                        <RV />
                        <RV />
                        <RV />
                        <RV />
                    </div>
                    <div className="vs-shorts-box">
                        <h3 className='shorts-vs-grid-heading'>Shorts</h3>
                        <div className="shorts-vs-grid">
                            <ShortsVP/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default VideoPage;