import React, { useState } from 'react';
import "./PaymentDropdown.css";
import logo_easypaisa from "../../assets/images/logo_easypaisa.png";
import logo_jazzcash from "../../assets/images/logo_jazzcash.png";
import easypaisa_step1 from "../../assets/images/easypaisa_step1.png";
import easypaisa_step2 from "../../assets/images/easypaisa_step2.png";
import easypaisa_step3 from "../../assets/images/easypaisa_step3.png";
import easypaisa_step4 from "../../assets/images/easypaisa_step4.png";
import jazzcash_step1 from "../../assets/images/jazzcash_step1.png";
import jazzcash_step2 from "../../assets/images/jazzcash_step2.png";
import jazzcash_step3 from "../../assets/images/jazzcash_step3.png";
import obt_step1 from "../../assets/images/obt_step1.png";
import obt_step2 from "../../assets/images/obt_step2.png";
import obt_step3 from "../../assets/images/obt_step3.png";

const PaymentDropdown = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const toggleAccordion1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2(false);
        setIsOpen3(false);
    };

    const toggleAccordion2 = () => {
        setIsOpen1(false);
        setIsOpen2(!isOpen2);
        setIsOpen3(false);
    };

    const toggleAccordion3 = () => {
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(!isOpen3);
    };


    const redirectToWhatsApp = () => {
        let phoneNumber = '03265833082';
        let whatsappLink = 'https://wa.me/' + phoneNumber;
        window.open(whatsappLink, '_blank');
    }


    return (
        <>
            <div className="PaymentDropdown max-w-md mx-auto w-full mt-12">
                <div className="bg-white p-4 mt-4 rounded shadow-md">
                    <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion1}>
                        <div className="flex-1 text-center mt-2 mx-auto" style={{ height: "2rem" }}>
                            <img src={logo_easypaisa} className="h-8 mx-auto" style={{ userSelect: "none" }} />
                        </div>
                        <svg
                            className={`w-4 h-4 transition-transform ${isOpen1 ? 'transform rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>

                    <div className={`mt-2 ${isOpen1 ? '' : 'hidden'}`}>
                        <section>
                            {/* -------- FIRST STEP -------- */}
                            <div className="payment_instructions my-8">
                                <div className="flex-1 text-center mt-2 mx-auto img-cont">
                                    <img src={easypaisa_step1} className="image max-w-xs mx-auto" />
                                </div>
                                <div className="payment_instructions_bar bg-blue-800 text-white py-2.5 max-w-sm mx-auto rounded-3xl text-lg">
                                    1. Open your EasyPaisa App
                                </div>
                                <div className="payment_instructions_bar_steps">
                                    <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Click on Money Transfer</h4>
                                </div>
                            </div>

                            {/* -------- SECOND STEP -------- */}
                            <div className="payment_instructions mt-4">
                                <div className="flex-1 text-center mt-2 mx-auto img-cont">
                                    <img src={easypaisa_step2} className="image max-w-xs mx-auto" />
                                </div>
                                <div className="payment_instructions_bar bg-blue-800 text-white py-2.5 max-w-sm mx-auto rounded-3xl text-lg">
                                    2. Select Bank Account
                                </div>
                                <div className="payment_instructions_bar_steps">
                                    <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Search “Faysal Bank”</h4>
                                </div>
                            </div>

                            {/* -------- THIRD STEP -------- */}
                            <div className="payment_instructions mt-4">
                                <div className="flex-1 text-center mt-2 mx-auto img-cont">
                                    <img src={easypaisa_step3} className="image max-w-xs mx-auto" />
                                </div>
                                <div className="payment_instructions_bar bg-blue-800 text-white py-2.5 max-w-sm mx-auto rounded-3xl text-lg">
                                    3. Type in the given Bank details
                                </div>

                                <div className="payment_instructions_bar_steps flex justify-center">
                                    <div className="payment_instructions_bar_steps_guide text-start lg:pl-52 md:pl-24 sm:pl-4 mt-4">
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Bank Name: Faysal Bank</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Bank Account Number: 0125007900219780</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Mobile Number: 03459615004</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Purpose: Education</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Confirm the Bank Account Title: NEARPEER(Private) LIMITED</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Click on “Send Now”</h4>
                                    </div>
                                </div>
                            </div>

                            {/* -------- FORTH STEP -------- */}
                            <div className="payment_instructions mt-4">
                                <div className="flex-1 text-center mt-2 mx-auto img-cont">
                                    <img src={easypaisa_step4} className="image max-w-xs mx-auto" />
                                </div>
                                <div className="payment_instructions_bar bg-blue-800 text-white py-2.5 max-w-sm mx-auto rounded-3xl text-lg">
                                    4. Once done, whatsapp us:
                                </div>

                                <div className="payment_instructions_bar_steps flex justify-center">
                                    <div className="payment_instructions_bar_steps_guide text-start lg:pl-52 md:pl-24 sm:pl-4 mt-4">
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'>
                                            <i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>A. Your Course Name
                                        </h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'>
                                            <i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>B. Screenshot of the SMS you get from 3737 (or the Easypaisa App Screen)
                                        </h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'>
                                            <i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>C. Your Nearpeer login ID (after signing-up)
                                        </h4>

                                        <div className="whatsapp_button mt-6">
                                            <button
                                                type="button"
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                                className="mb-2 inline-block rounded px-6 py-2.5 text-md font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                                                style={{ backgroundColor: "#128c7e" }}
                                                onClick={redirectToWhatsApp}
                                            >
                                                <i className="fa-brands fa-whatsapp text-white text-lg mr-2"></i>
                                                Whatsapp us
                                            </button>
                                        </div>

                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-semibold'>
                                            And you'll get access in 12 working hours <i className="fa-solid fa-bell text-rose-600 text-2xl ml-2"></i>
                                        </h4>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </div >


                <div className="bg-white p-4 mt-4 rounded shadow-md">
                    <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion2}>
                        <div className="flex-1 text-center mx-auto" style={{ height: "2rem", lineHeight: "2rem" }}>
                            <img src={logo_jazzcash} className="h-10 m-auto" />
                        </div>
                        <svg
                            className={`w-4 h-4 transition-transform ${isOpen2 ? 'transform rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                    <div className={`mt-2 ${isOpen2 ? '' : 'hidden'}`}>
                        <section>
                            {/* -------- FIRTH STEP -------- */}
                            <div className="payment_instructions mt-4">
                                <div className="flex-1 text-center mt-2 mx-auto img-cont">
                                    <img src={jazzcash_step1} className="image max-w-xs mx-auto" />
                                </div>
                                <div className="payment_instructions_bar bg-blue-800 text-white py-2.5 max-w-sm mx-auto rounded-3xl text-lg">
                                    1. Open your JazzCash App
                                </div>

                                <div className="payment_instructions_bar_steps flex justify-center">
                                    <div className="payment_instructions_bar_steps_guide text-start mt-4">
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Click on Send Money</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Select Bank Account</h4>
                                    </div>
                                </div>
                            </div>

                            {/* -------- SECOND STEP -------- */}
                            <div className="payment_instructions mt-4">
                                <div className="flex-1 text-center mt-2 mx-auto img-cont">
                                    <img src={jazzcash_step2} className="image max-w-xs mx-auto" />
                                </div>
                                <div className="payment_instructions_bar bg-blue-800 text-white py-2.5 max-w-sm mx-auto rounded-3xl text-lg">
                                    3. Type in the given Bank details
                                </div>

                                <div className="payment_instructions_bar_steps flex justify-center">
                                    <div className="payment_instructions_bar_steps_guide text-start lg:pl-52 md:pl-24 sm:pl-4 mt-4">
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Bank Name: Faysal Bank</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Bank Account Number: 0125007900219780</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Mobile Number: 03459615004</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Confirm the Bank Account Title: NEARPEER(Private) LIMITED</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Click on “Send Now”</h4>
                                    </div>
                                </div>
                            </div>

                            {/* -------- THIRD STEP -------- */}
                            <div className="payment_instructions mt-4">
                                <div className="flex-1 text-center mt-2 mx-auto img-cont">
                                    <img src={jazzcash_step3} className="image max-w-xs mx-auto" />
                                </div>
                                <div className="payment_instructions_bar bg-blue-800 text-white py-2.5 max-w-sm mx-auto rounded-3xl text-lg">
                                    4. Once done, whatsapp us:
                                </div>

                                <div className="payment_instructions_bar_steps flex justify-center">
                                    <div className="payment_instructions_bar_steps_guide text-start lg:pl-52 md:pl-24 sm:pl-4 mt-4">
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'>
                                            <i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>A. Your Course Name
                                        </h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'>
                                            <i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>B. Screenshot of the SMS you get from 8558 (or the Jazz Cash App Screen)
                                        </h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'>
                                            <i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>C. Your Nearpeer login ID (after signing-up)
                                        </h4>

                                        <div className="whatsapp_button mt-6">
                                            <button
                                                type="button"
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                                className="mb-2 inline-block rounded px-6 py-2.5 text-md font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                                                style={{ backgroundColor: "#128c7e" }}
                                                onClick={redirectToWhatsApp}
                                            >
                                                <i className="fa-brands fa-whatsapp text-white text-lg mr-2"></i>
                                                Whatsapp us
                                            </button>
                                        </div>

                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-semibold'>
                                            And you'll get access in 12 working hours <i className="fa-solid fa-bell text-rose-600 text-2xl ml-2"></i>
                                        </h4>
                                    </div>
                                </div>
                            </div>




                        </section>
                    </div>
                </div>

                <div className="bg-white p-4 mt-4 rounded shadow-md">
                    <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion3}>
                        <h2 className="text-lg font-semibold mx-auto">Online Bank Transfer</h2>
                        <svg
                            className={`w-4 h-4 transition-transform ${isOpen3 ? 'transform rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                    <div className={`mt-2 ${isOpen3 ? '' : 'hidden'}`}>
                        <section>
                            {/* -------- FIRTH STEP -------- */}
                            <div className="payment_instructions mt-4">
                                <div className="flex-1 text-center mt-2 mx-auto img-cont">
                                    <img src={obt_step1} className="image max-w-xs mx-auto" />
                                </div>
                                <div className="payment_instructions_bar bg-blue-800 text-white py-2.5 max-w-sm mx-auto rounded-3xl text-lg">
                                    1. Visit your Bank’s Website/App
                                </div>

                                <div className="payment_instructions_bar_steps flex justify-center">
                                    <div className="payment_instructions_bar_steps_guide text-start mt-4">
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Click on Send Money</h4>
                                    </div>
                                </div>
                            </div>


                            {/* -------- SECOND STEP -------- */}
                            <div className="payment_instructions mt-4">
                                <div className="flex-1 text-center mt-2 mx-auto img-cont">
                                    <img src={obt_step2} className="image max-w-xs mx-auto" />
                                </div>
                                <div className="payment_instructions_bar bg-blue-800 text-white py-2.5 max-w-sm mx-auto rounded-3xl text-lg">
                                    2. Add following account as your beneficiary:
                                </div>

                                <div className="payment_instructions_bar_steps flex justify-center">
                                    <div className="payment_instructions_bar_steps_guide text-start lg:pl-52 md:pl-24 sm:pl-4 mt-4">
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Bank Name: Faysal Bank</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Bank Account Number: 0125007900219780</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Mobile Number: 03459615004</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Purpose: Education</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Confirm the Bank Account Title: NEARPEER(Private) LIMITED</h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'><i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>Click on “Transfer Amount</h4>
                                    </div>
                                </div>
                            </div>

                            {/* -------- THIRD STEP -------- */}
                            <div className="payment_instructions mt-4">
                                <div className="flex-1 text-center mt-2 mx-auto img-cont">
                                    <img src={obt_step3} className="image max-w-xs mx-auto" />
                                </div>
                                <div className="payment_instructions_bar bg-blue-800 text-white py-2.5 max-w-sm mx-auto rounded-3xl text-lg">
                                    4. Once done, whatsapp us:
                                </div>

                                <div className="payment_instructions_bar_steps flex justify-center">
                                    <div className="payment_instructions_bar_steps_guide text-start lg:pl-52 md:pl-24 sm:pl-4 mt-4">
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'>
                                            <i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>A. Your Course Name
                                        </h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'>
                                            <i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>B. Screenshot of the SMS you get from Bank (or the App Screen)
                                        </h4>
                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-medium'>
                                            <i className="fa-solid fa-check mr-4 text-green-500 text-xl"></i>C. Your Nearpeer login ID (after signing-up)
                                        </h4>

                                        <div className="whatsapp_button mt-6">
                                            <button
                                                type="button"
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                                className="mb-2 inline-block rounded px-6 py-2.5 text-md font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                                                style={{ backgroundColor: "#128c7e" }}
                                                onClick={redirectToWhatsApp}
                                            >
                                                <i className="fa-brands fa-whatsapp text-white text-lg mr-2"></i>
                                                Whatsapp us
                                            </button>
                                        </div>

                                        <h4 className='my-2 py-2 text-gray-800 text-xl font-semibold'>
                                            And you'll get access in 12 working hours <i className="fa-solid fa-bell text-rose-600 text-2xl ml-2"></i>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
        </>
    );
};

export default PaymentDropdown;
