import '../../assets/styles/sidebar.css'
import shorts from '../../assets/images/shorts.svg'
import home from '../../assets/images/home.svg'
import subs from '../../assets/images/subs.svg'
import you from '../../assets/images/you.svg'
import SidebarOpen from './sidebaropen'
import SidebarClose from './sidebarclose'
const Sidebar=({isSidebarOpen})=>{
    return(
        <>
        <div className={`sidebar ${isSidebarOpen ? 'sidebar-extended' : ''}`}>
            
            {isSidebarOpen ? (
                <SidebarOpen/>
            ) : (
                <SidebarClose   home={home} shorts={shorts} subs={subs} you={you}  />
            )}
        </div>
        </>
    )
}

    
  export default Sidebar;