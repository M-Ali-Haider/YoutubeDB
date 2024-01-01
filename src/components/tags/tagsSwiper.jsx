import next from '../../assets/images/next.svg'
import prev from '../../assets/images/prev.svg'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import SwiperCore from 'swiper/core'
SwiperCore.use([Navigation])
import { useState,useEffect } from 'react';

const TagsSwiper=({tagsNumber})=>{

    const [tags, setTags] = useState([]);
    useEffect(() => {
        const fetchTags = async () => {
        try {
            const response = await axios.get('/api/videos/tags');
            const data = response.data;
            setTags(['All', ...data]);
        } catch (error) {
            console.log("Error tags tagswiper")
        }
        };
        fetchTags();
    }, []);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        const isFirstSlide = currentIndex === 0;
        const tagEmpPrevElement = document.querySelector('.tag-emp-prev');
        if (tagEmpPrevElement) {
          tagEmpPrevElement.style.display = isFirstSlide ? 'none' : 'block';
        }
    };
    return(
        <>
        <Swiper
            navigation={{ nextEl: '.tag-next', prevEl: '.tag-prev' }}
            slidesPerView={tagsNumber}
            onSlideChange={handleSlideChange}
            freeMode={true}
            allowTouchMove={true}
            className='tagsSwiper'
        >
            {tags.map((tag, index) => (
                <SwiperSlide key={index} className={`tags-unit ${index === activeIndex ? 'tags-unit-active' : ''}`}>
                    <Link onClick={() => setActiveIndex(index)} to={index === 0 ? '/' : `/tags/${tag}`} className="tag-link">
                        {tag}
                    </Link>
                </SwiperSlide>
            ))}
            
            <div className="tag-next-div">
                <div className="tag-emp-next"></div>
                <div className="tag-next-image">
                    <div className="tag-next">
                        <img src={next} alt="" />
                    </div>
                </div>
            </div>
            <div className="tag-prev-div">
                <div className="tag-prev-image">
                    <div className="tag-prev">
                        <img src={prev} alt="" />
                    </div>
                </div>
                <div className="tag-emp-prev"></div>
            </div>
        </Swiper>
        </>
    )
}
export default TagsSwiper;