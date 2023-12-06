import { Swiper, SwiperSlide } from 'swiper/react';
import sliderData from "./SliderData";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Controller } from 'swiper/modules';
import WaleedsProfile from "../../assets/images/WaleedsProfile.jpeg";
import suheer from "../../assets/images/image1.jpeg";


const Slider = ({ slide }) => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-8 mb-16 mx-auto">
                <h1 class="title-font sm:text-4xl text-3xl mb-16 font-medium text-gray-700 text-center">Our testimonial</h1>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    CenteredSlide={true}
                    loop={true}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5
                        }
                    }
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={slide}
                    navigation
                    // pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {sliderData.map((slider) => (
                        <SwiperSlide>
                            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                                <div className="max-w-3xl mx-auto" key={slider.id}>
                                    <figure>
                                        <blockquote>
                                            <p className="text-gray-700 text-xl text-center sm:text-xl">“{slider.text}“</p>
                                        </blockquote>

                                        <div className="flex justify-center items-center gap-x-4 mt-6">
                                            <img src={slider.img} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-medium">{slider.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">Social Swirl Workforce</span>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper >
            </div>
        </section>
    );
}

export default Slider

