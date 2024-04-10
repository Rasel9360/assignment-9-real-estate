
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
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
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img className='lg:h-[600px] object-cover w-full' src={photo1} alt="" /></SwiperSlide>
            <SwiperSlide><img className='lg:h-[600px] object-cover w-full' src={photo2} alt="" /></SwiperSlide>
            <SwiperSlide><img className='lg:h-[600px] object-cover w-full' src={photo3} alt="" /></SwiperSlide>
            <SwiperSlide><img className='lg:h-[600px] object-cover w-full' src={photo4} alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Banner;
