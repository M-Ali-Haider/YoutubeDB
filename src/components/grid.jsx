import '../assets/styles/grid.css'
import Video from './video';
import Shorts from './shorts';
const Grid=({isSidebarOpen,resetSidebar})=>{
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
                <Shorts
                    
                />
            </div>
        </>
    )
}
export default Grid;