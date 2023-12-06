import React, { useEffect } from 'react'
import RemoteJobsSlider from './RemoteJobsSlider'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./RemoteJobs.css";
import Gallery from '../aboutus/Gallery';

const RemoteJobs = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <>
            {/* ----------REMOTE JOB - HERO SECTION -----------  */}
            <section className="">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
                >
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Join Our Remote Team at Social Swirl
                            <strong className="mt-4 font-extrabold text-blue-700 sm:block">
                                Shape the Future Together.
                            </strong>
                        </h1>

                        <p className="mt-8 sm:text-xl/relaxed">
                            Explore global opportunities at Social Swirl. Work remotely with our diverse team on innovative projects, enjoying the flexibility to contribute to impactful initiatives.
                        </p>



                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a className="block w-full  px-12 py-3 text-sm font-medium text-white shadow bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring sm:w-auto rounded-lg"
                                href="#remoteJobs">
                                Explore Remote Jobs
                            </a>

                            <Link className="block w-full px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto rounded-lg"
                                to="/aboutus">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- JOB SECTION -----------  */}
            <section className='py-10' id="remoteJobs">
                <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">

                            <h2 className="text-3xl font-bold sm:text-4xl">Join Our Remote Team</h2>
                            <p className="mt-4 text-gray-600">
                                Passionate about creating impact? Join our diverse and talented remote team at Social Swirl. We believe in collaboration and innovation, offering you the flexibility to work from anywhere. Explore our open positions and kickstart your journey with us.
                            </p>


                            <a href="#" className="mt-6 inline-block roundedpx-12 py-3 text-sm font-mediumt ransition focus:outline-none">
                                <button className='apply_btn'>
                                    <div class="svg-wrapper-1">
                                        <div class="svg-wrapper">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                            >
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Apply</span>
                                </button>

                            </a>

                        </div>

                        {/* background-image: ; */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                className="block rounded-xl border p-4 shadow-sm focus:outline-none focus:ring"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSenyVIZQIwdGJ2ew6gAlGvNTFMjkUEkodfGFPK9nGK1uNdqJg/viewform"
                                target='_blank'
                                data-aos="fade-up"
                                style={{
                                    backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)'
                                }}>
                                < span className="inline-block rounded-lg bg-gray-50 p-3" >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Graphic Designing</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Intern - Social Swirl
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border p-4 shadow-sm focus:outline-none focus:ring"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSenyVIZQIwdGJ2ew6gAlGvNTFMjkUEkodfGFPK9nGK1uNdqJg/viewform"
                                target='_blank'
                                data-aos="fade-up"
                                style={{ backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)' }}>
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Wordpress</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Intern - Social Swirl
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border p-4 shadow-sm focus:outline-none focus:ring"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSenyVIZQIwdGJ2ew6gAlGvNTFMjkUEkodfGFPK9nGK1uNdqJg/viewform"
                                target='_blank'
                                data-aos="fade-up"
                                style={{ backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)' }}>
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Social Media</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Intern - Social Swirl
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border p-4 shadow-sm focus:outline-none focus:ring"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSenyVIZQIwdGJ2ew6gAlGvNTFMjkUEkodfGFPK9nGK1uNdqJg/viewform"
                                target='_blank'
                                data-aos="fade-up"
                                style={{ backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)' }}>
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Front End</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Intern - Social Swirl
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border p-4 shadow-sm focus:outline-none focus:ring"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSenyVIZQIwdGJ2ew6gAlGvNTFMjkUEkodfGFPK9nGK1uNdqJg/viewform"
                                target='_blank'
                                data-aos="fade-up"
                                style={{ backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)' }}>
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Back End</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Intern - Social Swirl
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border p-4 shadow-sm focus:outline-none focus:ring"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSenyVIZQIwdGJ2ew6gAlGvNTFMjkUEkodfGFPK9nGK1uNdqJg/viewform"
                                target='_blank'
                                data-aos="fade-up"
                                style={{ backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)' }}>
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">SEO Intern</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Intern - Social Swirl
                                </p>
                            </a>
                        </div>
                    </div>
                </div >
            </section >


            {/* ---------- JOB SECTION -----------  */}
            <section className='mt-10'>
                <div className="container max-w-3xl py-10">
                    <h2 className="text-3xl text-center mb-8 font-medium text-gray-600">INTERNSHIP DESCRIPTION</h2>

                    <div className="desc_box my-3 py-3 px-4 rounded-lg shadow flex flex-1 justify-between items-center bg-white">
                        <p className="text-lg text-gray-700">Graphic Designing Intern JD (docx)</p>
                        <a class="inline-block rounded bg-indigo-600 px-8 py-2.5 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                            href="/download">
                            Download
                        </a>
                    </div>

                    <div className="desc_box my-3 py-3 px-4 rounded-lg shadow flex flex-1 justify-between items-center bg-white">
                        <p className="text-lg text-gray-700">Wordpress Intern JD (docx)</p>
                        <a class="inline-block rounded bg-indigo-600 px-8 py-2.5 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                            href="/download">
                            Download
                        </a>
                    </div>

                    <div className="desc_box my-3 py-3 px-4 rounded-lg shadow flex flex-1 justify-between items-center bg-white">
                        <p className="text-lg text-gray-700">Social Media Intern JD (docx)</p>
                        <a class="inline-block rounded bg-indigo-600 px-8 py-2.5 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                            href="/download">
                            Download
                        </a>
                    </div>

                    <div className="desc_box my-3 py-3 px-4 rounded-lg shadow flex flex-1 justify-between items-center bg-white">
                        <p className="text-lg text-gray-700">Front End Intern JD (docx)</p>
                        <a class="inline-block rounded bg-indigo-600 px-8 py-2.5 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                            href="/download">
                            Download
                        </a>
                    </div>

                    <div className="desc_box my-3 py-3 px-4 rounded-lg shadow flex flex-1 justify-between items-center bg-white">
                        <p className="text-lg text-gray-700">Back End Intern JD (docx)</p>
                        <a class="inline-block rounded bg-indigo-600 px-8 py-2.5 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                            href="/download">
                            Download
                        </a>
                    </div>

                    <div className="desc_box my-3 py-3 px-4 rounded-lg shadow flex flex-1 justify-between items-center bg-white">
                        <p className="text-lg text-gray-700">SEO Intern JD (docx)</p>
                        <a class="inline-block rounded bg-indigo-600 px-8 py-2.5 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
                            href="/download">
                            Download
                        </a>
                    </div>

                </div>
            </section >



            {/* ---------- FAQ'S SECTION -----------  */}
            < section section className='max-w-2xl mx-auto' >
                <div className="space-y-4 py-20" style={{ userSelect: 'none' }}>

                    <div class="mx-auto mb-16 max-w-2xl lg:text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Frequently Asked Questions
                        </h2>
                        <p class="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                            Please reach us at  if you cannot find an answer to your question.
                        </p>
                    </div>


                    <details className="group  [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-4 text-gray-900"
                        >
                            <h2 className="font-medium">
                                Is this Paid Internship?
                            </h2>

                            <svg
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700 ">
                            Yes, Our Plan is to make it paid for every talented person.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-4 text-gray-900"
                        >
                            <h2 className="font-medium">
                                How long will the internship last?
                            </h2>

                            <svg
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            Internship plan is only for 2 to 3 Months.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-4 text-gray-900"
                        >
                            <h2 className="font-medium">
                                Will I receive training or mentorship?
                            </h2>

                            <svg
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            Yes, our Team Leader will conduct daily live lectures.
                        </p>
                    </details>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white p-4 text-gray-900"
                        >
                            <h2 className="font-medium">
                                What are the working hours and schedule?
                            </h2>

                            <svg
                                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                            Basically our official hours are 10AM to 6PM and we need only 3 active hours from your side.
                            But, If its not suits you. You can easily record the lecture and take it with your time.
                        </p>
                    </details>
                </div>
            </section >


            {/* ---------- GALLERY -----------  */}
            <Gallery slide={1} />


            {/* ---------- REMOTE JOBS SLIDER SECTION -----------  */}
            < RemoteJobsSlider />



        </>
    )
}

export default RemoteJobs
