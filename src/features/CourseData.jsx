import frontEndDev from "../assets/images/frontEndDev.png";
import GraphicDesigning from "../assets/images/GraphicDesigning.png";
import SEO from "../assets/images/SEO.png";
import socialMediaMarketing from "../assets/images/socialMediaMarketing.jpg";
import backEndDev from "../assets/images/backEndDev.jpeg";
import hr_Management from "../assets/images/hr_Management.jpg";
import WaleedsProfile from "../assets/images/WaleedsProfile.jpeg";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";


import backend_course from "../assets/images/backend_course.jpg";
import graphic_course from "../assets/images/graphic_course.jpg";
import socialMedia_course from "../assets/images/socialMedia_course.jpg";
import seo_course from "../assets/images/seo_course.jpeg";
import frontend_course from "../assets/images/frontend_course.jpg";
import hr_course from "../assets/images/hr_course.jpg";






const courseData = [
    {
        id: "01",
        course_no: "course 1",
        name: "Frontend Development",
        instructor: "Sir Waleed",
        instructor_post: "Senior Graphic Designer",
        instructor_img: WaleedsProfile,
        duration: "1 to 3 Months",
        cover: frontend_course,
        price: "30,000",
        desc: "Learn the art of crafting captivating user interfaces. Dive into HTML, CSS, and JavaScript to build responsive and visually stunning websites. Master the latest frontend frameworks for a seamless user experience.",
        training_type: "online",
        lecture_recording: "Available",
        completion: "Certificate",
        internship_opportunity: "Bright Students",
        overview_data: "Embark on a journey to master the art of crafting captivating user interfaces. In this course, you'll delve into the foundational elements of web development—HTML5, CSS3, and JavaScript. Progress to advanced topics, exploring popular frontend frameworks that empower you to build responsive and visually stunning websites. Your hands-on experience in real projects, guided by seasoned instructors, will not only sharpen your technical skills but also enable you to build a professional portfolio, setting you on the path to becoming an adept frontend developer.",
        features: [
            'Learn under the guidance of experienced web developers and freelancers.',
            'Get the chance to secure an internship after completing the training.',
            'Focus on in-demand frontend technologies to stay relevant in the industry.',
            'Our fast-track program ensures comprehensive training in just 3 months.'
        ]

    },
    {
        id: "02",
        course_no: "course 2",
        name: "Graphic Designing",
        instructor: "Jamal Khan",
        instructor_post: "Senior Graphic Designer",
        instructor_img: image2,
        duration: "1 to 3 Months",
        cover: graphic_course,
        price: "30,000",
        desc: "Transform your creativity into visual masterpieces. Delve into graphic design principles, color theory, and industry-standard tools. From logos to illustrations, develop the skills to bring ideas to life.",
        training_type: "online",
        lecture_recording: "Available",
        completion: "Certificate",
        internship_opportunity: "Bright Students",
        overview_data: "Immerse yourself in the vibrant world of visual storytelling and creativity. This course is a deep dive into graphic design, where you'll become proficient in industry-standard tools like Adobe Photoshop and Illustrator. From understanding design principles to creating visually stunning graphics, this journey will not only enhance your creative flair but also provide you with the skills to curate an impressive portfolio showcasing your design prowess.",
        features: [
            'Learn the art of graphic design with guidance from seasoned designers.',
            'Explore potential internships to apply your graphic design skills.',
            'Immerse yourself in creative design principles and tools.',
            'Our course is designed for rapid skill acquisition within 3 months.'
        ]

    },
    {
        id: "03",
        course_no: "course 3",
        name: "SEO",
        instructor: "Waleed Ahmad",
        instructor_post: "Senior SEO Expert",
        instructor_img: image3,
        duration: "1 to 3 Months",
        cover: seo_course,
        price: "30,000",
        desc: "Elevate your digital presence with SEO mastery. Discover the secrets of search engine algorithms, keyword optimization, and content strategy. Learn the techniques to boost website visibility and drive organic traffic.",
        training_type: "online",
        lecture_recording: "Available",
        completion: "Certificate",
        internship_opportunity: "Bright Students",
        overview_data: "Step into the realm of digital visibility as you discover the art and science of Search Engine Optimization (SEO). From mastering on-page SEO techniques to delving into keyword research and content optimization, this course equips you with the comprehensive toolkit needed to enhance website visibility. By the end, you'll be adept at improving search engine rankings and contributing to the success of digital marketing strategies.",
        features: [
            'Gain insights from industry experts in the field of SEO.',
            'Explore internship options post-training to apply your SEO skills.',
            'Learn strategies for effective website optimization and enhanced visibility.',
            'Our course is structured for efficient learning within 3 months.'
        ]

    },
    {
        id: "04",
        course_no: "course 4",
        name: "Social Media Marketing",
        instructor: "Sir Waleed",
        instructor_post: "Senior Social Media Expert",
        instructor_img: image1,
        duration: "1 to 3 Months",
        cover: socialMedia_course,
        price: "30,000",
        desc: "Harness the power of social platforms for business growth. Explore social media strategies, content creation, and analytics. Learn to engage audiences, build brand presence, and execute successful marketing campaigns.",
        training_type: "online",
        lecture_recording: "Available",
        completion: "Certificate",
        internship_opportunity: "Bright Students",
        overview_data: "Navigate the ever-evolving landscape of social media marketing across major platforms like Facebook, Instagram, Twitter, and LinkedIn. This course empowers you with the knowledge to create compelling content, run effective marketing campaigns, and analyze performance metrics. By the end, you'll be equipped to leverage social media as a powerful tool for successful digital marketing strategies, enhancing brand visibility and engagement.",
        features: [
            'Gain valuable insights into effective social media marketing strategies.',
            'Explore internships to practically apply social media marketing skills.',
            'Learn to create engaging content and successful social media campaigns.',
            'Acquire skills efficiently with our focused program within 3 months.'
        ],
    },
    {
        id: "05",
        course_no: "course 5",
        name: "Back End Development",
        instructor: "Sir Waleed",
        instructor_post: "Senior Graphic Designer",
        instructor_img: image2,
        duration: "1 to 3 Months",
        cover: backend_course,
        price: "30,000",
        desc: "Unleash the power of server-side development. Explore languages Node.js to build robust and scalable backend systems. Understand databases, APIs, and server deployment for creating dynamic web applications.",
        training_type: "online",
        lecture_recording: "Available",
        completion: "Certificate",
        internship_opportunity: "Bright Students",
        overview_data: "Unlock the mysteries of backend development by immersing yourself in technologies like Node.js and MongoDB. This course is designed to deepen your understanding of server-side scripting and database management, empowering you to construct robust and scalable web applications. With a focus on practical application, you'll gain the backend skills necessary to breathe life into dynamic websites and contribute meaningfully to web development projects.",
        features: [
            'Receive hands-on training supervised by veteran backend developers.',
            'Unlock internship opportunities upon successful completion of the course.',
            'Emphasize in-demand backend technologies for a competitive edge.',
            'Benefit from a fast-track program designed to skill you up in 3 months.'
        ]
    },
    {
        id: "06",
        course_no: "course 6",
        name: "WordPress Developer",
        instructor: "Sir Waleed",
        instructor_post: "Senior WordPress Developer",
        instructor_img: image3,
        duration: "1 to 3 Months",
        cover: hr_course,
        price: "30,000",
        desc: "Navigate the world's most popular content management system with our WordPress course. From installation to customization, discover how to create feature-rich websites and blogs using WordPress, empowering you to manage online content effortlessly.",
        training_type: "online",
        lecture_recording: "Available",
        completion: "Certificate",
        internship_opportunity: "Bright Students",
        overview_data: "Explore the dynamic capabilities of WordPress, the leading content management system. This course is a hands-on experience where you'll learn to build dynamic websites, customize themes, and develop plugins. Practical insights into scalable and user-friendly WordPress site development will make you a proficient WordPress developer, capable of crafting impactful online presences for diverse purposes.",
        features: [
            'Receive training from expert instructors well-versed in WordPress.',
            'Unlock possibilities for internships after completing the WordPress course.',
            'Master the art of managing online content using WordPress.',
            'Our program ensures quick and effective learning within 3 months.'
        ]

    },

];

export default courseData;
