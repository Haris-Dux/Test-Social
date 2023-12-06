import React, { useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CompanyStats = () => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
            <section className="mt-12 py-12" style={{ backgroundColor: "#0066b2" }}>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl font-semibold sm:text-4xl">Join Us and Thrive in a Community of Success</h3>
                    </div>
                    <div className="mt-1">
                        <ul className="flex flex-col gap-3 items-center justify-center sm:flex-row">
                            <div className="container grid grid-cols-2 py-8 mx-auto text-center md:grid-cols-3">
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
                            </div>
                        </ul>
                    </div>
                </div>
            </section>
        </ScrollTrigger>

    )
}
export default CompanyStats
