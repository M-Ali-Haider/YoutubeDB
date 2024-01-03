import ChannelVideo from "./channelVid";
const GridVideoChannel=({videos,resetSidebar})=>{

    return(
        <>
        <div className="grid">
            {videos.map((video)=>(
                <ChannelVideo key={video._id} video={video} resetSidebar={resetSidebar}/>
            ))}
        </div>
        </>
    )
}
export default GridVideoChannel;