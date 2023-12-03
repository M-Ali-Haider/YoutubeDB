import Sidebar from "./sidebar";
import Tags from "./tags";
import Main from "./mai";
import Footer from "./footer";
const Homepage=({isSidebarOpen})=>{
    return(
        <>
        <Sidebar
            isSidebarOpen={isSidebarOpen}
        />
        <Tags
            isSidebarOpen={isSidebarOpen}
        />
        <Main
            isSidebarOpen={isSidebarOpen}
        />
        <Footer/>
        </>
    )
}
export default Homepage;