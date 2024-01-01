import Sidebar from "./sidebar/sidebar";
import Tags from "./tags/tags";
import Main from "./mai";
import Footer from "./footer";
import Channel from "./channel";
const Homepage=({tagsPage,channelPage,searchPage,signPage,type,isSidebarOpen,resetSidebar,isSignedIn})=>{
    const tagsNumber= isSidebarOpen ? 13 : 15
    return(
        <>
        <Sidebar
            isSignedIn={isSignedIn}
            isSidebarOpen={isSidebarOpen}
        />
        {channelPage?(
            <Channel isSidebarOpen={isSidebarOpen} resetSidebar={resetSidebar}/>
        ):(
            <>
                <Tags
                    isSidebarOpen={isSidebarOpen}
                    tagsNumber={tagsNumber}
                />
                <Main
                    tagsPage={tagsPage}
                    channelPage={channelPage}
                    searchPage={searchPage}
                    signPage={signPage}
                    type={type}
                    isSidebarOpen={isSidebarOpen}
                    resetSidebar={resetSidebar}
                />
                <Footer/>
            </>
        )}
        </>
    )
}
export default Homepage;