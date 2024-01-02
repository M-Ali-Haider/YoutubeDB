import '../../assets/styles/sidebar.css'
import shorts from '../../assets/images/shorts.svg'
import home from '../../assets/images/home.svg'
import homeclose from '../../assets/images/homeclose.svg'
import subs from '../../assets/images/subs.svg'
import subopen from '../../assets/images/subopen.svg'
import you from '../../assets/images/you.svg'
import yourvideoopen from '../../assets/images/yourvideoopen.svg'



import SidebarOpen from './sidebaropen'
import SidebarClose from './sidebarclose'
const Sidebar=({isSidebarOpen,resetSidebar})=>{
    return(
        <>
        <div className={`sidebar ${isSidebarOpen ? 'sidebar-extended' : ''}`}>
            
            {isSidebarOpen ? (
                <SidebarOpen resetSidebar={resetSidebar}/>
            ) : (
                <SidebarClose   home={home} shorts={shorts} subs={subs} you={you} homeclose={homeclose} subopen={subopen} youclose={yourvideoopen}  />
            )}
        </div>
        </>
    )
}

    
  export default Sidebar;