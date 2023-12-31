import '../../assets/styles/sidebar.css'
import shorts from '../../assets/images/shorts.svg'
import home from '../../assets/images/home.svg'
import subs from '../../assets/images/subs.svg'
import you from '../../assets/images/you.svg'
import browse from '../../assets/images/browse.svg'
import SignInButton from '../signIn/signInButton'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

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
                        <img src={home} alt="" />
                        <span>Home</span>
                    </div>
                </Link>
                <div 
                    className={`sb-unit ${activeItem==='shorts' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('shorts')}
                >
                    <img src={shorts} alt="" />
                    <span>Shorts</span>
                </div>
                
                <Link to="/subscriptions">
                <div 
                    className={`sb-unit ${activeItem==='subs' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('subs')}
                >
                    <img src={subs} alt="" />
                    <span>Subscriptions</span>
                </div>
                </Link>
                
                
            </div>
            <div className="sb-comp">
                <div 
                    className={`sb-unit ${activeItem==='you' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('you')}
                >
                    <img src={you} alt="" />
                    <span>You</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='history' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('history')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24"  viewBox="0 0 24 24" width="24" focusable="false"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg>
                    <span>History</span>
                </div>
            </div>
            {currentUser?(<></>
            ):(
                <div className="sb-comp">
                    
                        <SignInButton />
                    
                </div>
            )}
            <div className="sb-comp">
                <div className="comp-heading">Explore</div>

                
                <Link to="/trends">
                <div 
                    className={`sb-unit ${activeItem==='trends' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('trends')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path></svg>
                    <span>Trending</span>
                </div>
                </Link>

                <div 
                    className={`sb-unit ${activeItem==='music' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('music')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path></svg>
                    <span>Music</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='gaming' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('gaming')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path></svg>
                    <span>Gaming</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='news' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('news')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path></svg>
                    <span>News</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='sports' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('sports')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" ><path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path></svg>
                    <span>Sports</span>
                </div>
            </div>
            <div className="sb-comp">
                <div 
                    className={`sb-unit ${activeItem==='browse' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('browse')}
                >
                    <img src={browse} alt="" />
                    <span className='sb-browse'>Browse channels</span>
                </div>
            </div>
            <div className="sb-comp">
                <div 
                    className={`sb-unit ${activeItem==='settings' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('settings')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path></svg>
                    <span>Settings</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='reportHistory' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('reportHistory')}
                >
                <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"></path></svg>
                    <span>Report History</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='help' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('help')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path></svg>
                    <span>Help</span>
                </div>
                <div 
                    className={`sb-unit ${activeItem==='sendFeedback' ? 'sb-active':''}`}
                    onClick={() => handleItemClick('sendFeedback')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"  height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"></path></svg>
                    <span>Send feedback</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default SidebarOpen;