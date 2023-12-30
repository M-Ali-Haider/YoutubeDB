import Sidebar from "./sidebar/sidebar";
import Tags from "./tags/tags";
import Main from "./mai";
import Footer from "./footer";
const Homepage=({type,isSidebarOpen,resetSidebar,isSignedIn})=>{
    const tagsNumber= isSidebarOpen ? 13 : 15
    return(
        <>
        <Sidebar
            isSignedIn={isSignedIn}
            isSidebarOpen={isSidebarOpen}
        />
        <Tags
            isSidebarOpen={isSidebarOpen}
            tagsNumber={tagsNumber}
        />
        <Main
            type={type}
            isSidebarOpen={isSidebarOpen}
            resetSidebar={resetSidebar}
        />
        <Footer/>
        </>
    )
}
export default Homepage;