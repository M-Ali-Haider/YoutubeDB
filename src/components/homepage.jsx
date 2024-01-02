import Sidebar from "./sidebar/sidebar";
import Tags from "./tags/tags";
import Main from "./mai";
import Footer from "./footer";
import Channel from "./channel";
import Subout from "./subout";
const Homepage=({subout,tagsPage,channelPage,searchPage,signPage,type,isSidebarOpen,resetSidebar,isSignedIn})=>{
    const tagsNumber= isSidebarOpen ? 13 : 15
    return(
        <>
        <Sidebar
            isSignedIn={isSignedIn}
            isSidebarOpen={isSidebarOpen}
            resetSidebar={resetSidebar}
        />
        {subout?(
            <Subout />
        ):
        channelPage?(
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