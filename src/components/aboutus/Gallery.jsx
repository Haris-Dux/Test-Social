import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
// import suheer from "../../assets/gallery/suheer.png";
// import img2 from "../../assets/gallery/img2.png";
import img1 from "../../assets/Gallery_Slider/img1.png";
import img2 from "../../assets/Gallery_Slider/img2.png";
import img3 from "../../assets/Gallery_Slider/img3.png";
import img4 from "../../assets/Gallery_Slider/img4.png";
import img5 from "../../assets/Gallery_Slider/img5.png";
import img6 from "../../assets/Gallery_Slider/img6.png";

const Gallery = ({ slide }) => {
    const navigate = useNavigate();

    const sliderData = [
        {
            id: 1,
            img: img1,
        },
        {
            id: 2,
            img: img2,
        },
        {
            id: 3,
            img: img3,
        },
        {
            id: 4,
            img: img4,
        },
        {
            id: 5,
            img: img5,
        },
        {
            id: 6,
            img: img6,
        },
    ];

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 max-w-3xl">
                <h1 class="title-font sm:text-4xl lg:text-5xl mt-5 font-medium text-gray-800 text-center">Gallery</h1>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    CenteredSlide={true}
                    loop={true}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                    spaceBetween={-40}
                    slidesPerView={slide}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}

                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    {sliderData.map((data) => (
                        <SwiperSlide key={data.id}>
                            <div class="m-auto overflow-hidden shadow-lg cursor-pointer h-90 w-60 md:w-full mt-10">
                                <div class="block w-full h-full">
                                    <img alt="blog photo" src={data.img} class="object-cover w-full" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Gallery;
