import next from '../../assets/images/next.svg'
import prev from '../../assets/images/prev.svg'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import SwiperCore from 'swiper/core'
SwiperCore.use([Navigation])
import '../../assets/styles/gridShorts.css'
import Short from '../shorts/short'
import ShortMobile from '../shorts/shortMobile'

const GridShorts=({isSidebarOpen})=>{
    return(
        <>
        <div className="gridshorts">
            <Swiper
                navigation={{ nextEl: '.short-next', prevEl: '.short-prev' }}
                slidesPerView={isSidebarOpen ? 5 : 6}
                spaceBetween={10}
                className='shorts-swiper'
            >
                {Array.from({length: 8}).map((_, index) => (
                    <SwiperSlide key={index}>
                        <Short />
                    </SwiperSlide>
                ))}

                <div className="short-next">
                    <img src={next} alt="" />
                </div>
                <div className="short-prev">
                    <img src={prev} alt="" />
                </div>
            </Swiper>
        </div>
        <div className="grid-mobile">
            <div className="grid-mobile-short-row">
                <ShortMobile />
                <ShortMobile />
            </div>
            <div className="grid-mobile-short-row">
                <ShortMobile />
                <ShortMobile />
            </div>
        </div>
        </>
    )
}
export default GridShorts;
