import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Controller } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const OtherCourses = ({ otherCourse, slide }) => {
    const navigate = useNavigate();

    const handleClick = (course_id) => {
        navigate(`/selectedCourse/${course_id}`);
        window.scrollTo(0, 0);
    }

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <h1 class="title-font sm:text-4xl lg:text-5xl mt-5 mb-3 font-medium text-gray-800 text-center">Other Courses</h1>
                <h4 class="title-font sm:text-xl lg:text-xl text-xl mb-10 font-small text-gray-700 text-center">Explore the other courses we offer and get benefits</h4>
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
                    spaceBetween={-40}
                    slidesPerView={slide}
                    
                    navigation
                    // pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {otherCourse.map((course) => (
                        <SwiperSlide>
                            <div key={course.id} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} class="course_card m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80 mt-10">
                                <div class=" block w-full h-full" onClick={() => handleClick(course.id)}>
                                    <img alt="blog photo" src={course.cover} class="object-cover w-full max-h-48" />
                                    <div class="w-full p-4 bg-white dark:bg-gray-800">
                                        <p class="font-medium text-indigo-500 text-md">{course.course_no}</p>
                                        <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">{course.name}</p>
                                        <p class="text-gray-800 dark:text-gray-300 text-md">Instrutor: {course.instructor}</p>
                                        <p class="text-gray-800 dark:text-gray-300 text-md">Duration: {course.duration}</p>

                                        <div class="flex flex-wrap items-center mt-4 justify-starts">
                                            <div class="text-xs mr-2 mt-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">#{course.name}</div>
                                            <div class="text-xs mr-2 mt-1 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">#{course.completion}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper >
            </div>
        </section >
    );
}

export default OtherCourses


