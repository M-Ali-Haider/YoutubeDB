
import TagsSwiper from "./tagsSwiper";
const Tags=({isSidebarOpen})=>{
    
    return(
        <>
        <div className="tags-container">
            <div className={`tags-helper ${isSidebarOpen ? 'tags-helper-active' : ''}`}></div>
            <div className="tags-header">
                <TagsSwiper />
            </div>
        </div>
        </>
    )
}
export default Tags;