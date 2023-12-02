import '../assets/styles/tags.css'
const Tags=({isSidebarOpen})=>{
    return(
        <>
        <div className="tags-container">
            <div className={`tags-helper ${isSidebarOpen ? 'tags-helper-active' : ''}`}></div>
            <div className="tags-header">
                <div className="tags-unit tags-unit-active">All</div>
                <div className="tags-unit">Music</div>
                <div className="tags-unit">Action Thrillers</div>
                <div className="tags-unit">Siraiki Cinema</div>
                <div className="tags-unit">Thrillers</div>
                <div className="tags-unit">News</div>
                <div className="tags-unit">Comedy</div>
                <div className="tags-unit">Pakistani dramas</div>
                <div className="tags-unit">Live</div>
                <div className="tags-unit">Wickets</div>
                <div className="tags-unit">Gaming</div>
                <div className="tags-unit">History</div>
                <div className="tags-unit">Anime</div>
            </div>
        </div>
        </>
    )
}
export default Tags;