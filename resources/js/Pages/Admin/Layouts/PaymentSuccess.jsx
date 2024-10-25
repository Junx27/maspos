import FormaterRupiah from "@/Components/FormaterRupiah";
import React from "react";

function PaymentSuccess({ handleClose, totalPayment }) {
    return (
        <div className="md:w-[500px] md:h-[350px] bg-white md:shadow-lg md:rounded-lg mx-auto p-5 flex flex-col items-center">
            <h1 className="font-bold text-center">Payment Succesfull</h1>
            <img
                src="/assets/check.png"
                alt=""
                className="w-20 h-20 md:w-32 md:h-32 my-5"
            />
            <div className="font-bold">
                <FormaterRupiah number={totalPayment} />
            </div>
            <div className="flex justify-center mt-10">
                <button
                    type="button"
                    className="border-2 border-blue-600 w-32 py-2 rounded-lg md:rounded-sm text-blue-600 text-sm font-bold"
                    onClick={handleClose}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default PaymentSuccess;
