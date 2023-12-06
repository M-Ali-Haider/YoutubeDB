
import TagsSwiper from "./tagsSwiper";
const Tags=({isSidebarOpen,tagsNumber})=>{
    
    return(
        <>
        <div className="tags-container">
            <div className={`tags-helper ${isSidebarOpen ? 'tags-helper-active' : ''}`}></div>
            <div className="tags-header">
                <TagsSwiper tagsNumber={tagsNumber}/>
            </div>
        </div>
        </>
    )
}
export default Tags;