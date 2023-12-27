import next from '../../assets/images/next.svg'
import prev from '../../assets/images/prev.svg'
import '../../assets/styles/gridShorts.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation} from 'swiper/modules'
import SwiperCore from 'swiper/core'
SwiperCore.use([Navigation])
import Short from "./short";
const ShortsVP=()=>{
    return(
        <>
        <Swiper
            navigation={{ nextEl: '.short-next', prevEl: '.short-prev' }}
            slidesPerView={3}
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
        </>
    )
}
export default ShortsVP;