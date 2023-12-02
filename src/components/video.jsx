import '../assets/styles/video.css'
import thumbnail from '../assets/images/thumbnail.jpeg'

const Video=()=>{
    return(
        <>
            <div className="video">
                <img className='thumbnail' src={thumbnail} alt="" />
                <div className="vid-details"></div>
            </div>
        </>
    )
}
export default Video;