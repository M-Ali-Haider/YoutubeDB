import Video from '../video';
const GridVideo=({isSidebarOpen,resetSidebar})=>{
    return(
        <>
        <div className="grid">
                <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/>
            {isSidebarOpen ? (
                <>
                </>
            ): (
                <>
                <Video resetSidebar={resetSidebar}/>
                <Video resetSidebar={resetSidebar}/>
                </>
            )}
        </div>
        </>
    )
}
export default GridVideo;