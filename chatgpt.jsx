
const SidebarOpen=()=>{
    const {currentUser} = useSelector(state=>state.user)
    const [activeItem, setActiveItem] = useState('home');
    const handleItemClick = (item) => {
        setActiveItem(item);
    };
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
                    <div 
                        className={`sb-unit ${activeItem==='yourchannel' ? 'sb-active':''}`}
                        onClick={() => handleItemClick('yourchannel')}
                    >
                        {activeItem==='yourchannel'?(<img src={yourchannelopen} alt="" />):(<img src={yourchannel} alt="" />)} 
                        <span>Your channel</span>
                    </div>
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

                <div 
                    className={`sb-unit ${activeItem==='music' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('music')}
                >
                    {activeItem==='music'?(<img src={musicopen} alt="" />):(<img src={music} alt="" />)} 
                    <span>Music</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='gaming' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('gaming')}
                >
                    {activeItem==='gaming'?(<img src={gamingopen} alt="" />):(<img src={gaming} alt="" />)} 
                    <span>Gaming</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='news' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('news')}
                >  
                    {activeItem==='news'?(<img src={newsopen} alt="" />):(<img src={news} alt="" />)} 
                    <span>News</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='sports' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('sports')}
                >
                    {activeItem==='sports'?(<img src={sportopen} alt="" />):(<img src={sport} alt="" />)} 
                    <span>Sports</span>
                </div>
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