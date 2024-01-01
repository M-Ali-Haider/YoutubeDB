import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function TagsMobile() {
    const [tags, setTags] = useState([]);
useEffect(() => {
    const fetchTags = async () => {
    try {
        const response = await axios.get('/api/videos/tags');
        const data = response.data;
        setTags(['All', ...data]);
    } catch (error) {
        console.log("Error tags tagsMOBILE")
    }
    };
    fetchTags();
}, []);
  return (<div className="tags-header-mobile">
            {tags.map((tag, index) => <Link key={index} className={`tagse-unit ${index === 0 ? 'tags-unit-active' : ""}`}>{tag}</Link>)}
        </div>);
}
export default TagsMobile