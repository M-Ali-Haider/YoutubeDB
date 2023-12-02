import '../assets/styles/sidebar.css'
const Sidebar=(isSidebarOpen)=>{
    console.log(isSidebarOpen);
    return(
        <>
        <div className="sidebar">
            {isSidebarOpen ? (
                <div className="sidebar-close">
                    its close
                </div>
            ) : (
                <div className="sidebar-open">
                    its open
                </div>
            )}
        </div>
        </>
    )
}
export default Sidebar;