import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay } from 'swiper/core';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

SwiperCore.use([Autoplay]);

const Category = () => {
  return (
    <section>
      <SectionTitle subHeading="From 11.00am to 10.pm" heading="Order Online" />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{ delay: 2000 }} // Enable autoplay with a delay of 5 seconds (5000 milliseconds)
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        initialSlide={0}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-2xl">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-2xl">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-2xl">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-2xl">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white shadow-2xl">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
