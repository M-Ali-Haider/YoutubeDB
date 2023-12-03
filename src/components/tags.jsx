import '../assets/styles/tags.css'
import next from '../assets/images/next.svg'
import prev from '../assets/images/prev.svg'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import SwiperCore from 'swiper/core'
SwiperCore.use([Navigation])

const Tags=({isSidebarOpen})=>{
    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        const isFirstSlide = currentIndex === 0;
        const tagEmpPrevElement = document.querySelector('.tag-emp-prev');
        if (tagEmpPrevElement) {
          tagEmpPrevElement.style.display = isFirstSlide ? 'none' : 'block';
        }
      };
      const breakpoints = {
        550: {
          freemode: true,
          touch: true,
        },
        551: {
          freemode: false,
          touch: false,
        },
      };
      
    return(
        <>
        <div className="tags-container">
            <div className={`tags-helper ${isSidebarOpen ? 'tags-helper-active' : ''}`}></div>
            <div className="tags-header">
                <Swiper
                    navigation={{ nextEl: '.tag-next', prevEl: '.tag-prev' }}
                    slidesPerView={10}
                    onSlideChange={handleSlideChange}
                    breakpoints={breakpoints}
                    className='tagsSwiper'
                >

                    <SwiperSlide className="tags-unit tags-unit-active">All</SwiperSlide>
                    <SwiperSlide className="tags-unit">Music</SwiperSlide>
                    <SwiperSlide className="tags-unit">Action Thrillers</SwiperSlide>
                    <SwiperSlide className="tags-unit">Siraiki Cinema</SwiperSlide>
                    <SwiperSlide className="tags-unit">Thrillers</SwiperSlide>
                    <SwiperSlide className="tags-unit">News</SwiperSlide>
                    <SwiperSlide className="tags-unit">Comedy</SwiperSlide>
                    <SwiperSlide className="tags-unit">Pakistani dramas</SwiperSlide>
                    <SwiperSlide className="tags-unit">Live</SwiperSlide>
                    <SwiperSlide className="tags-unit">Wickets</SwiperSlide>
                    <SwiperSlide className="tags-unit">Gaming</SwiperSlide>
                    <SwiperSlide className="tags-unit">History</SwiperSlide>
                    <SwiperSlide className="tags-unit">Anime</SwiperSlide>
                    <SwiperSlide className="tags-unit">Romance</SwiperSlide>
                    <SwiperSlide className="tags-unit">Football</SwiperSlide>
                    <SwiperSlide className="tags-unit">Boqir</SwiperSlide>
                    
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
            </div>
        </div>
        </>
    )
}
export default Tags;