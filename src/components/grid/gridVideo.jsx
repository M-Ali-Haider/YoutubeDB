import Video from '../videoTemplates/video';
const GridVideo=({videos,resetSidebar})=>{

    return(
        <>
        <div className="grid">
            {videos.map((video)=>(
                <Video key={video._id} video={video} resetSidebar={resetSidebar}/>
            ))}
        </div>
        </>
    )
}
export default GridVideo;