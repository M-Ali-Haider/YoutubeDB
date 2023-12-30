import '../assets/styles/tags.css'
import '../assets/styles/main.css'
import Grid from './grid/grid'
const Main=({type,isSidebarOpen,resetSidebar})=>{
    return(
        <>
        <main>
            <div className={`tags-helper ${isSidebarOpen ? 'tags-helper-active' : ''}`}></div>
            
            <Grid
             type={type}   
             isSidebarOpen={isSidebarOpen}
             resetSidebar={resetSidebar}
            />
        </main>
        </>
    )
}   
export default Main;