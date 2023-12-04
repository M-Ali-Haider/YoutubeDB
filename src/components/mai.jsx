import '../assets/styles/tags.css'
import '../assets/styles/main.css'
import Grid from './grid'
const Main=({isSidebarOpen,resetSidebar})=>{
    return(
        <>
        <main>
            <div className={`tags-helper ${isSidebarOpen ? 'tags-helper-active' : ''}`}></div>
            <Grid
             isSidebarOpen={isSidebarOpen}
             resetSidebar={resetSidebar}
            />
        </main>
        </>
    )
}   
export default Main;