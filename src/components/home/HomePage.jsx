import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/logo.png";
import hero_img_1 from "../../assets/images/hero-img-1.jpeg";
import hero_img_2 from "../../assets/images/hero-img-2.png";
import Slider from './Slider';
import "./HomePage.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WaleedsProfile from "../../assets/images/WaleedsProfile.jpeg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const HomePage = () => {
    const dispatch = useDispatch();
    const [counterOn, setCounterOn] = useState(false);

    const courseData = useSelector((state) => state.course.courseData);

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    const team = [
        {
            id: "01",
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "Product designer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            id: "02",
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Micheal colorand",
            title: "Software engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            id: "03",
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Brown Luis",
            title: "Full stack engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        }
    ]
    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin escobar",
            title: "Founder of meta",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela stian",
            title: "Product designer",
            quote: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim ahmed",
            title: "DevOp engineer",
            quote: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        },
    ]

    return (
        <>
            {/* ----------- HERO SECTION -----------  */}
            <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left pt-10">
                    <h1 className="hero-title title-font pt-12 lg:pt-4 text-5xl sm:text-7xl md:text-7xl lg:text-7xl mb-4 font-bold">Social Swirl</h1>
                    <p className="mb-8 leading-relaxed">Explore the world of web development with Social Swirl. Join our user-friendly courses led by industry experts, offering hands-on experiences and a clear path to mastering coding. Join us to unlock your coding skills and confidently shape your future success!</p>

                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <Link to="/" className="px-7 py-3 w-full text-white text-center rounded-md shadow-md block sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl">
                            Feasible Timing
                        </Link>
                        <Link to="/elearning" className="px-7 py-3 w-full text-white text-center rounded-md block sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl">
                            Project Based Learning
                        </Link>
                    </div>
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 pt-10">
                    <img src={logo} className="w-full mx-auto sm:w-10/12 lg:w-full" />
                </div>
            </section>



            {/* ----------- SECTION NO 1 -----------  */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={hero_img_1} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Social Swirl</h1>
                        <h3 className="title-font sm:text-4xl lg:text-2xl mb-4 font-medium text-blue-600">Best Software House of Pakistan</h3>
                        <p className="mb-8 leading-relaxed">The company's mission is to provide high-quality software solutions and media that help businesses and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to excellence, Social Swirl is dedicated to providing personalised, reliable, and affordable services to its clients. AIMS Our mission is to provide high-quality software solutions and media services that help businesses and individuals optimise their online presence and achieve their goals.</p>
                        <div className="flex justify-center">
                            <Link to="/elearning" onClick={handleClick} className="inline-flex text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl border-0 py-2 px-6 focus:outline-none rounded text-lg">Enroll Now</Link>
                        </div>
                    </div>
                </div>
            </section>



            {/* ----------- SECTION NO 2 -----------  */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 mb-16 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Events and Updates</h1>
                        <p className="mb-8 leading-relaxed">We are delighted to announce an exciting new development at Social Swirl: the launch of our highly anticipated Business Outsourcing Project. At Social Swirl, we have always been committed to delivering exceptional services and innovative solutions to meet the evolving needs of our clients. With our new Business Outsourcing Project, we are taking our commitment to the next level by offering comprehensive outsourcing solutions tailored to enhance the efficiency and productivity of your business operations.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={hero_img_2} />
                    </div>
                </div>
            </section>



            {/* ----------- SECTION NO 3: COUNTER SECTION -----------  */}
            <ScrollTrigger onEnter={() => setCounterOn(true)}>
                <section style={{ backgroundColor: "#0066b2" }}>
                    <div className="container grid grid-cols-2 gap-8 py-14 mx-auto text-center md:grid-cols-4">
                        <div>
                            <h5 id="animatedNumber" className="text-5xl font-bold text-white animate-value" data-value="1500">
                                {counterOn && <CountUp start={0} end={350} duration={2} />}+
                            </h5>
                            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Student Enrolled</p>
                        </div>
                        <div>
                            <h5 className="text-5xl font-bold text-white">
                                {counterOn && <CountUp start={0} end={14} duration={2} />}+
                            </h5>
                            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Ongoing contracts</p>
                        </div>
                        <div>
                            <h5 className="text-5xl font-bold text-white">
                                {counterOn && <CountUp start={0} end={31} duration={2} />}+
                            </h5>
                            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Finished projects</p>
                        </div>
                        <div>
                            <h5 className="text-5xl font-bold text-white">
                                {counterOn && <CountUp start={0} end={3} duration={2} />}+
                            </h5>
                            <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">Years in business</p>
                        </div>
                    </div>
                </section>
            </ScrollTrigger>



            {/* ----------- SECTION NO 4 -----------  */}
            <section className="benefits_section text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Elevate Your Skills with Social Swirl's Diverse Course Offerings
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto">
                            Explore hands-on projects at Social Swirl. Unlock your potential with our real-world applications.
                        </p>



                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span className="title-font font-medium">Practical Learning</span>
                                    <p className="text-gray-600 mt-2">Gain hands-on experience with real-world projects, ensuring you are well-prepared for the challenges of the industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span className="title-font font-medium">Expert Instructors</span>
                                    <p className="text-gray-600 mt-2">Learn from industry experts with years of experience, ensuring you receive top-notch guidance throughout the course.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span className="title-font font-medium">Job Placement Assistance</span>
                                    <p className="text-gray-600 mt-2">Get assistance in finding job opportunities and internships after completing the course, increasing your chances of success.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-white rounded flex p-4 h-full items-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <div>
                                    <span className="title-font font-medium">Industry-Relevant Curriculum</span>
                                    <p className="text-gray-600 mt-2">Stay updated with the latest technologies and trends through our curriculum designed in collaboration with industry experts.</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/elearning" onClick={handleClick} className="flex mx-auto mt-16 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl border-0 py-2 px-8 focus:outline-none  rounded text-lg">Enroll Now</Link>

                    </div>
                </div>
            </section>

            {/* ----------- SECTION NO 4: SLIDER --> TESTIMONIAL-----------  */}
            <Slider slide={1} />


        </>
    )
}

export default HomePage
