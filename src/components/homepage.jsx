import Sidebar from "./sidebar";
import Tags from "./tags";
import Main from "./mai";
import Footer from "./footer";
const Homepage=({isSidebarOpen,resetSidebar})=>{
    const tagsNumber= isSidebarOpen ? 13 : 15
    return(
        <>
        <Sidebar
            isSidebarOpen={isSidebarOpen}
        />
        <Tags
            isSidebarOpen={isSidebarOpen}
            tagsNumber={tagsNumber}
        />
        <Main
            isSidebarOpen={isSidebarOpen}
            resetSidebar={resetSidebar}
        />
        <Footer/>
        </>
    )
}
export default Homepage;