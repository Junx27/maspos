import React from "react";

function ContentManage({ handleHome, handleCategory, handleHistory }) {
    return (
        <div className="mx-5 md:mx-10 lg:mx-32">
            <div className="md:flex md:justify-end">
                <div className="flex justify-between gap-2 md:gap-5">
                    <div
                        className="bg-blue-100 p-2 px-4 text-[11px] md:text-xs text-blue-600 hover:bg-blue-200 font-bold rounded-lg md:rounded-sm cursor-pointer"
                        onClick={handleCategory}
                    >
                        <h1>All Categories</h1>
                    </div>
                    <div
                        className="bg-blue-100 p-2 px-4 text-[11px] md:text-xs text-blue-600 hover:bg-blue-200 font-bold rounded-lg md:rounded-sm cursor-pointer"
                        onClick={handleHistory}
                    >
                        <h1>All Histories</h1>
                    </div>
                    <div
                        className="bg-blue-600 hover:bg-blue-500 p-2 px-4 text-[11px] md:text-xs text-white font-bold rounded-lg md:rounded-sm cursor-pointer"
                        onClick={handleHome}
                    >
                        <h1>Back to Home</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentManage;
