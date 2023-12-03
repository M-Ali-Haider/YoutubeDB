import '../assets/styles/grid.css'
import Video from './video';
import Shorts from './shorts';
const Grid=({isSidebarOpen})=>{
    return(
        <>
            <div className="grid">
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                {isSidebarOpen ? (
                    <>
                    </>
                ): (
                    <>
                    <Video />
                    <Video />
                    </>
                )}
                <Shorts
                    
                />
            </div>
        </>
    )
}
export default Grid;