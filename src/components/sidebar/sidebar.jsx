import '../../assets/styles/sidebar.css'
import shorts from '../../assets/images/shorts.svg'
import home from '../../assets/images/home.svg'
import subs from '../../assets/images/subs.svg'
import you from '../../assets/images/you.svg'
import SidebarOpen from './sidebaropen'
const Sidebar=({isSidebarOpen})=>{
    return(
        <>
        <div className={`sidebar ${isSidebarOpen ? 'sidebar-extended' : ''}`}>
            
            {isSidebarOpen ? (
                <SidebarOpen />
            ) : (
                <div className={`sidebar-close`}>
                    <div className="sb-close-unit">
                        <img src={home} alt="" />
                        <span>Home</span>
                    </div>
                    <div className="sb-close-unit">
                        <img src={shorts} alt="" />
                        <span>Shorts</span>
                    </div>
                    <div className="sb-close-unit">
                        <img src={subs} alt="" />
                        <span>Subscriptions</span>
                    </div>
                    <div className="sb-close-unit">
                        <img src={you} alt="" />
                        <span>You</span>
                    </div>
                    <div className="sb-close-unit">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path></svg>
                        <span>Downloads</span>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}
export default Sidebar;