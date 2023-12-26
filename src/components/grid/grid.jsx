import '../../assets/styles/grid.css'
import GridShorts from './gridShorts'
import GridVideo from './gridVideo';
const Grid=({isSidebarOpen,resetSidebar})=>{
    return(
        <>
            <div className="grid-container">
                <GridVideo
                    isSidebarOpen={isSidebarOpen}
                    resetSidebar={resetSidebar}
                />
                <GridShorts
                    isSidebarOpen={isSidebarOpen}
                />
                <GridVideo
                    isSidebarOpen={isSidebarOpen}
                    resetSidebar={resetSidebar}
                />
                <GridShorts
                    isSidebarOpen={isSidebarOpen}
                />
            </div>
            
        </>
    )
}
export default Grid;