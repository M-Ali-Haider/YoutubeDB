import '../assets/styles/body.css'
import Sidebar from './sidebar';
import Main from './mai';
const Body=({isSidebarOpen})=>{
    return(
        <>
        <main>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
            />
            <Main
                
            />
        </main>
        </>
    )
}
export default Body;