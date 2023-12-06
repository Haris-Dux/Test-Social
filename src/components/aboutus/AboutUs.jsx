import React from "react";
import heroImg3 from "../../assets/images/hero-img-3.jpg";
import heroImg2 from "../../assets/images/hero-img-2.png";
import logo from "../../assets/images/logo.png";
import member1 from "../../assets/images/image1.jpeg";
import member5 from "../../assets/images/image5.jpeg";
import aboutus from "../../assets/images/aboutus.jpg";
import { Link } from "react-router-dom";
import OurTeam from "./OurTeam";
import AboutSection from "../selectedCourse/AboutSection";

const AboutUs = () => {
  const team = [
    {
      avatar: member1,
      name: "Suheer",
      title: "Senior Frot End Developer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: member5,
      name: "Mustafa Tawab",
      title: "Junior Front End Developer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Brown Luis",
      title: "Full stack engineer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      name: "Lysa sandiago",
      title: "Head of designers",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Daniel martin",
      title: "Product designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Vicky tanson",
      title: "Product manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      linkedin: "javascript:void(0)",
      twitter: "javascript:void(0)",
    },
  ];

  return (
    <>
      {/* ----------- BANNER -----------  */}
      <section className="">

      </section>


      {/* ----------- MESSAGE FROM CEO -----------  */}
      <section className="py-6">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-32 sm:px-4  md:px-0 lg:flex">
            <div className="flex-1  sm:hidden lg:block" >
              <img
                src={logo}
                className="md:max-w-lg sm:rounded-lg lg:max-w-md"
                alt=""

              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Message From CEO
              </p>
              <p className="mt-3 text-gray-600 text-lg ">
                As the CEO of Social Swirl, I extend a warm welcome to aspiring
                minds seeking to delve into the realms of UI/UX design, web app
                development, SEO, marketing, and customer service support. Our
                courses are crafted to ignite your passion, equipping you with
                the skills needed to thrive in the dynamic world of digital
                innovation. Join us on a transformative learning journey, where
                knowledge meets practical expertise, paving the way for your
                success in the ever-evolving tech landscape
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ----------- SOCIAL SWIRL HISTORY -----------  */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-24 lg:py-12 lg:px-8">
          <div className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full" style={{ borderRadius: '0% 27% 0% 10% / 10% 52% 21% 0% ' }}>
              <img
                alt="Party"
                src={aboutus}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <h3 className="text-indigo-700 font-semibold">Since 2018</h3>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Social Swirl History
                </h2>

                <p>
                  Social Swirl, founded with a vision for digital excellence, has
                  evolved into a trailblazer in the tech industry. Since our
                  inception, we've been committed to delivering top-notch services
                  in UI/UX design, web app development, SEO, marketing, and
                  customer service support. Our journey is a testament to
                  innovation, client satisfaction, and a passion for crafting
                  seamless online experiences
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- ABOUR SECTION -----------  */}
      <AboutSection />

      {/* ----------- OUR TEAM -----------  */}
      <OurTeam />


    </>
  );
};

export default AboutUs;
