import '../../assets/styles/sidebar.css'
import shorts from '../../assets/images/shorts.svg'
import shortsopen from '../../assets/images/shortsopen.svg'
import home from '../../assets/images/home.svg'
import homeclose from '../../assets/images/homeclose.svg'
import SignInButton from '../signIn/signInButton'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import sub from '../../assets/images/subs.svg'
import subopen from '../../assets/images/subopen.svg'
import yourchannel from '../../assets/images/yourchannel.svg'
import yourchannelopen from '../../assets/images/yourchannelopen.svg'
import history from '../../assets/images/history.svg'
import historyopen from '../../assets/images/historyopen.svg'
import yourvideo from '../../assets/images/yourvideo.svg'
import yourvideoopen from '../../assets/images/yourvideoopen.svg'
import watchlater from '../../assets/images/watchlater.svg'
import watchlateropen from '../../assets/images/watchlateropen.svg'
import trending from '../../assets/images/trending.svg'
import trendingopen from '../../assets/images/trendingopen.svg'
import music from '../../assets/images/music.svg'
import musicopen from '../../assets/images/musicopen.svg'
import gaming from '../../assets/images/gaming.svg'
import gamingopen from '../../assets/images/gamingopen.svg'
import news from '../../assets/images/news.svg'
import newsopen from '../../assets/images/newsopen.svg'
import sport from '../../assets/images/sport.svg'
import sportopen from '../../assets/images/sportopen.svg'
import browse from '../../assets/images/browse.svg'
import browseopen from '../../assets/images/browseopen.svg'
import reporthistory from '../../assets/images/reporthistory.svg'
import reporthistoryopen from '../../assets/images/reporthistoryopen.svg'
import setting from '../../assets/images/setting.svg'
import help from '../../assets/images/help.svg'
import sendfeedback from '../../assets/images/sendfeedback.svg'

const SidebarOpen=({resetSidebar})=>{
    const {currentUser} = useSelector(state=>state.user)
    const [activeItem, setActiveItem] = useState('home');
    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const path = useLocation().pathname.split("/")[2];
    // console.log(path);

    return(
        <>
        <div className={`sidebar-open`}>
            <div className="sb-comp">
                <Link to="/">
                    <div 
                        className={`sb-unit ${activeItem==='home' ? 'sb-active':''}`}
                        onClick={() => handleItemClick('home')}
                    >   
                       {activeItem==='home'?(<img src={home} alt="" />):(<img src={homeclose} alt="" />)} 
                        <span>Home</span>
                    </div>
                </Link>
                <div 
                    className={`sb-unit ${activeItem==='shorts' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('shorts')}
                >
                    {activeItem==='shorts'?(<img src={shortsopen} alt="" />):(<img src={shorts} alt="" />)} 
                    <span>Shorts</span>
                </div>
                
                {currentUser?(
                    <Link to="/subscriptions">
                        <div 
                            className={`sb-unit ${activeItem==='subs' ? 'sb-active':''}`}
                            onClick={() => handleItemClick('subs')}
                        >
                            {activeItem==='subs'?(<img src={subopen} alt="" />):(<img src={sub} alt="" />)} 
                            <span>Subscriptions</span>
                        </div>
                    </Link>
                ):null}
                
            </div>
            
            {currentUser?(<>
                <div className="sb-comp">
                    <div className="comp-heading">You</div>
                    <Link onClick={resetSidebar} to={`/channel/${currentUser._id}`}>
                        <div 
                            className={`sb-unit ${activeItem==='yourchannel' ? 'sb-active':''}`}
                            onClick={() => handleItemClick('yourchannel')}
                        >
                            {activeItem==='yourchannel'?(<img src={yourchannelopen} alt="" />):(<img src={yourchannel} alt="" />)} 
                            <span>Your channel</span>
                        </div>
                    </Link>
                    <div 
                        className={`sb-unit ${activeItem==='history' ? 'sb-active':''}`}
                        onClick={() => handleItemClick('history')}
                    >
                        {activeItem==='history'?(<img src={historyopen} alt="" />):(<img src={history} alt="" />)} 
                        <span>History</span>
                    </div>

                    <Link to="/yourvids">
                        <div 
                            className={`sb-unit ${activeItem==='yourvideo' ? 'sb-active':''}`}
                            onClick={() => handleItemClick('yourvideo')}
                        >
                            {activeItem==='yourvideo'?(<img src={yourvideoopen} alt="" />):(<img src={yourvideo} alt="" />)} 
                            <span>Your videos</span>
                        </div>
                    </Link>
                    
                    <Link to="/watchlater">
                        <div 
                            className={`sb-unit ${activeItem==='watchlater' ? 'sb-active':''}`}
                            onClick={() => handleItemClick('watchlater')}
                        >
                            {activeItem==='watchlater'?(<img src={watchlateropen} alt="" />):(<img src={watchlater} alt="" />)} 
                            <span>Watch Later</span>
                        </div>
                    </Link>
                </div>
            </>
            ):(
                <>
                <div className="sb-comp">
                    <SignInButton />
                </div>
                </>
                
            )}
            <div className="sb-comp">
                <div className="comp-heading">Explore</div>

                
                <Link to="/trends">
                <div 
                    className={`sb-unit ${activeItem==='trends' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('trends')}
                >
                    {activeItem==='trends'?(<img src={trendingopen} alt="" />):(<img src={trending} alt="" />)} 
                    <span>Trending</span>
                </div>
                </Link>
                <Link to="/tags/music">
                    <div 
                        className={`sb-unit ${activeItem==='music' ? 'sb-active':''}`}
                        onClick={() => handleItemClick('music')}
                    >
                        {activeItem==='music'?(<img src={musicopen} alt="" />):(<img src={music} alt="" />)} 
                        <span>Music</span>
                    </div>
                </Link>
                <Link to="/tags/gaming">
                    <div 
                        className={`sb-unit ${activeItem==='gaming' ? 'sb-active':''}`}
                        onClick={() => handleItemClick('gaming')}
                    >
                        {activeItem==='gaming'?(<img src={gamingopen} alt="" />):(<img src={gaming} alt="" />)} 
                        <span>Gaming</span>
                    </div>
                </Link>
                <Link to="/tags/news">
                    <div 
                        className={`sb-unit ${activeItem==='news' ? 'sb-active':''}`}
                        onClick={() => handleItemClick('news')}
                    >  
                        {activeItem==='news'?(<img src={newsopen} alt="" />):(<img src={news} alt="" />)} 
                        <span>News</span>
                    </div>
                </Link>
                <Link to="/tags/sports">
                    <div 
                        className={`sb-unit ${activeItem==='sports' ? 'sb-active':''}`}
                        onClick={() => handleItemClick('sports')}
                    >
                        {activeItem==='sports'?(<img src={sportopen} alt="" />):(<img src={sport} alt="" />)} 
                        <span>Sports</span>
                    </div>
                </Link>
            </div>
            <div className="sb-comp">
                <div 
                    className={`sb-unit ${activeItem==='browse' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('browse')}
                >
                    {activeItem==='browse'?(<img src={browseopen} alt="" />):(<img src={browse} alt="" />)} 
                    <span className='sb-browse'>Browse channels</span>
                </div>
            </div>
            <div className="sb-comp">
                <div 
                    className={`sb-unit ${activeItem==='settings' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('settings')}
                >
                    <img src={setting} alt="" />
                    <span>Settings</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='reportHistory' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('reportHistory')}
                >
                    {activeItem==='reportHistory'?(<img src={reporthistoryopen} alt="" />):(<img src={reporthistory} alt="" />)} 
                    <span>Report History</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='help' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('help')}
                >
                    <img src={help} alt="" />
                    <span>Help</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='sendFeedback' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('sendFeedback')}
                >
                    <img src={sendfeedback} alt="" />
                    <span>Send feedback</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default SidebarOpen;