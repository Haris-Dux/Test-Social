import React from 'react'
import WaleedsProfile from "../../assets/images/WaleedsProfile.jpeg";
import Suheer from "../../assets/images/Suheer.png";
import Awais from "../../assets/images/Awais.jpg";
import Haris from "../../assets/images/Haris.png";

const OurTeam = () => {

    const team = [
        {
            avatar: WaleedsProfile,
            name: "Waleed Ahmad",
            title: "Frontend Developer",
        },
        {
            avatar: Haris,
            name: "Haris Saeed",
            title: "Full stack engineer",
        },
        {
            avatar: Suheer,
            name: "Suheer Zahid",
            title: "Frontend Developer",
        },
        {
            avatar: Awais,
            name: "Awais Yousaf",
            title: "Seo Expert",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Numan",
            title: "Graphic designer",
        }
    ]

    return (
        <section className="py-24">
            <div className="max-w-screen-xl mx-auto px-4 py-10 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Meet the brilliance behind Social Swirl - a team of passion and innovation.
                    </p>

                </div>
                <div className="mt-20">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-20 h-20 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}



export default OurTeam
