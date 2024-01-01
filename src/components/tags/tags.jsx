import '../../assets/styles/tags.css'
import TagsSwiper from "./tagsSwiper";
import TagsMobile from './tagsMobile';
const Tags=({isSidebarOpen,tagsNumber})=>{
    return(
        <>
        <div className="tags-container">
            <div className={`tags-helper ${isSidebarOpen ? 'tags-helper-active' : ''}`}></div>
            <div className="tags-header">
                <TagsSwiper tagsNumber={tagsNumber}/>
            </div>
            <TagsMobile/>
        </div>
        </>
    )
}
  export default Tags;