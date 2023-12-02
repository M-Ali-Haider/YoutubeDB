import '../assets/styles/sidebar.css'
const Sidebar=({isSidebarOpen})=>{
    return(
        <>
        <div className={`sidebar ${isSidebarOpen ? 'sidebar-extended' : ''}`}>
            {isSidebarOpen ? (
                <div className="sidebar-close">

                </div>
            ) : (
                <div className="sidebar-open">
                    
                </div>
            )}
        </div>
        </>
    )
}
export default Sidebar;