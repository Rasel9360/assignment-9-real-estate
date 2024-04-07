import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import photo1 from '../../src/assets/image/s1.jpg';
import photo2 from '../../src/assets/image/s2.jpg';
import photo3 from '../../src/assets/image/s3.jpg';
import photo4 from '../../src/assets/image/s4.jpg';

const Banner = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img className='lg:h-[600px] object-cover w-full' src={photo1} alt="" /></SwiperSlide>
            <SwiperSlide><img className='lg:h-[600px] object-cover w-full' src={photo2} alt="" /></SwiperSlide>
            <SwiperSlide><img className='lg:h-[600px] object-cover w-full' src={photo3} alt="" /></SwiperSlide>
            <SwiperSlide><img className='lg:h-[600px] object-cover w-full' src={photo4} alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Banner;