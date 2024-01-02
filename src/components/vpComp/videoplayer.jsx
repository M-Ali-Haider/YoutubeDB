
import { useEffect, useRef } from 'react'
const VideoPlayer=({videoUrl})=>{
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
        videoRef.current.volume = 0.1;
        }
    }, []);
    return(
        <>
            {/* <video ref={videoRef} className='mv' src={currentVideo.videoUrl} controls autoPlay={true}></video> */}
            <video ref={videoRef} className='mv' src={videoUrl} controls autoPlay={true}></video>
        </>
    )
}
export default VideoPlayer