import React from 'react'
import payment_creditcard from "../../assets/images/payment_creditcard.png";

import PaymentDropdown from './PaymentDropdown';



const PaymentMethod = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container sm:px-0 md:px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">SECURELY COMPLETE YOUR TRANSACTION</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Payment and Access Method</h1>

                        <div className="flex-1 text-center mt-2 pt-2 mx-auto" style={{ userSelect: "none" }}>
                            <img src={payment_creditcard} className="w-72" />
                        </div>


                        <PaymentDropdown />


                    </div>
                </div>
            </section>
        </>
    )
}

export default PaymentMethod
