import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/styles/grid.css';
import GridShorts from './gridShorts';
import GridVideo from './gridVideo';
import SignPage from '../signIn/signPage';
import Search from '../search';
import TagsPage from '../tagspage';

const Grid = ({ tagsPage, searchPage, signPage, type, isSidebarOpen, resetSidebar }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/api/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  const getVideoChunks = () => {
    const chunkSize = isSidebarOpen ? 6 : 8;
    const videoChunks = [];
    for (let i = 0; i < videos.length; i += chunkSize) {
      const chunk = videos.slice(i, i + chunkSize);
      videoChunks.push(chunk);
      if ((isSidebarOpen && i + chunkSize < videos.length) || (!isSidebarOpen && (i + chunkSize) % 8 === 0 && i + chunkSize < videos.length)) {
        videoChunks.push(['short']);
      }
    }
    return videoChunks;
  };

  return (
    <>
      <div className="grid-container">
        {signPage ? (
          <SignPage />
        ) : searchPage ? (
          <Search resetSidebar={resetSidebar} />
        ) : tagsPage ? (
          <TagsPage resetSidebar={resetSidebar} />
        ) : (
          getVideoChunks().map((chunk, index) =>
            chunk[0] === 'short' ? (
              <GridShorts key={index} isSidebarOpen={isSidebarOpen} />
            ) : (
              <GridVideo key={index} videos={chunk} resetSidebar={resetSidebar} />
            )
          )
        )}
      </div>
    </>
  );
};

export default Grid;
