import '../../assets/styles/tags.css'
import TagsSwiper from "./tagsSwiper";
const Tags=({isSidebarOpen,tagsNumber})=>{
    
    return(
        <>
        <div className="tags-container">
            <div className={`tags-helper ${isSidebarOpen ? 'tags-helper-active' : ''}`}></div>
            <div className="tags-header">
                <TagsSwiper tagsNumber={tagsNumber}/>
            </div>
            <div className="tags-header-mobile">
                <div className="tagse-unit tags-unit-active">All</div>
                <div className="tagse-unit">Music</div>
                <div className="tagse-unit">Action Thrillers</div>
                <div className="tagse-unit">Siraiki Cinema</div>
                <div className="tagse-unit">Thrillers</div>
                <div className="tagse-unit">News</div>
                <div className="tagse-unit">Comedy</div>
                <div className="tagse-unit">Pakistani dramas</div>
                <div className="tagse-unit">Live</div>
                <div className="tagse-unit">Wickets</div>
                <div className="tagse-unit">Gaming</div>
                <div className="tagse-unit">History</div>
                <div className="tagse-unit">Anime</div>
                <div className="tagse-unit">Romance</div>
                <div className="tagse-unit">Football</div>
                <div className="tagse-unit">Boqir</div>
            </div>
        </div>
        </>
    )
}
export default Tags;