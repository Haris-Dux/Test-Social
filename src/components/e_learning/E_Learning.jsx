import React, { useEffect } from 'react'
import "./E_Learning.css";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import E_Learning_hero from "../../assets/images/E_Learning_hero.jpg";
import CompanyStats from './CompanyStats';
import WaleedsProfile from "../../assets/images/WaleedsProfile.jpeg";
import OurTeam from '../aboutus/OurTeam';

const E_learning = () => {
    const navigate = useNavigate();
    const courseData = useSelector((state) => state.course.courseData);


    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])


    const handleClick = (course_id) => {
        navigate(`/selectedCourse/${course_id}`);
        window.scrollTo(0, 0);
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Waleed Ahmad",
            title: "Frontend Developer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Suheer Zahid",
            title: "Frontend Developer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Haris Saeed",
            title: "Full stack engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
    ]

    return (
        <>
            {/* ----------- E-LEARNING - HERO SECTION -----------  */}
            <section className="pt-36 pb-12">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">Over 250+ successful Students</h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">Welcome to Social Swirl E-Learning!</h2>
                        <p>Discover a world of knowledge and growth at Social Swirl. We have empowered over 300 students to succeed in Frontend, Backend, SEO, Human Resource, Graphic Designing, and Social Media Marketing. Join us to unleash your potential and make a difference!</p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link to="/login" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Let's get started
                            </Link>
                            <Link to="/signup" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Register Now
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src={E_Learning_hero}
                            className="md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            {/* ----------- E-LEARNING - COURSES -----------  */}
            <section id='elearning' className="elearning">
                <div className="w-full p-12">
                    <div className="flex items-end justify-between mt-14 mb-4 header">
                        <div className="title ml-9">
                            <p className="mb-4 text-4xl font-bold text-gray-800">Our Courses</p>
                            <p className="text-xl text-gray-600">All Courses are made by Experienced Experts</p>
                        </div>
                    </div>

                    {/* ------------ COURSES ------------ */}
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
                        {courseData.map((course) => (
                            <article className="bg-white max-w-xs mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={course.id} data-aos="fade-up">
                                <div className='cursor-pointer' onClick={() => handleClick(course.id)} >
                                    <img src={course.cover} loading="lazy" alt="..." className="w-full h-48 rounded-t-md" />
                                    <div className="flex items-center mt-2 pt-3 ml-4 mr-2 ">
                                        <div className="flex-none w-10 h-10 rounded-full">
                                            <img src={course.instructor_img} className="w-full h-full rounded-full" alt="..." />
                                        </div>
                                        <div className="ml-3">
                                            <span className="block text-gray-900">{course.instructor}</span>
                                            <span className="block text-gray-400 text-sm">{course.instructor_post}</span>
                                        </div>
                                    </div>
                                    <div className="pt-3 ml-4 mr-2 mb-3">
                                        <h1 class="pt-2 pb-1 inline-flex items-center text-lg font-medium text-gray-700">
                                            {course.name}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="ml-2 h-4 w-4"
                                            >
                                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                                <polyline points="7 7 17 7 17 17"></polyline>
                                            </svg>
                                        </h1>
                                        <h3 className="text-md text-gray-500">Duration: {course.duration}</h3>
                                    </div>

                                    <div className="mt-4 mb-3 ml-4">
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            #{course.training_type}
                                        </span>
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            {course.completion}
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section >

            {/* <CompanyStats /> */}


            {/* <section className="py-14 my-14">
                <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                    <div className="max-w-xl mx-auto">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Meet our team
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Get to know the talented individuals who make our team exceptional.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                            {
                                team.map((item, idx) => (
                                    <li key={idx}>
                                        <div className="w-24 h-24 mx-auto">
                                            <img
                                                src={item.avatar}
                                                className="w-full h-full rounded-full"
                                                alt=""
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                            <p className="text-indigo-600">{item.title}</p>
                                            <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                                <a href={item.twitter}>
                                                    <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                </a>
                                                <a href={item.linkedin}>
                                                    <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section> */}
            <OurTeam />

        </>
    )
}

export default E_learning
