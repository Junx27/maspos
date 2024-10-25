import React from "react";

function PopOverSuccess({ children }) {
    return (
        <div className="relative">
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white w-full rounded-xl p-5 mx-10">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default PopOverSuccess;
