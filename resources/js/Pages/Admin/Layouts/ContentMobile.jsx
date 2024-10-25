import React, { useContext, useState } from "react";
import MyContext from "@/Components/CreateContex";
import PopOver from "@/Components/PopOver";

function ContentMobile({
    handleCategory,
    handleProduct,
    handleCart,
    handleManageAll,
}) {
    const [openMenu, setOpenMenu] = useState(false);
    const { cart } = useContext(MyContext);
    return (
        <div className="bg-white relative">
            {!openMenu && (
                <div className="absolute bottom-5 right-5 md:bottom-20 md:right-10">
                    <div
                        className="relative bg-blue-600 hover:bg-blue-500 p-3 text-xs text-white font-bold rounded-full cursor-pointer"
                        onClick={handleCart}
                    >
                        <img
                            src="/assets/cart.png"
                            alt=""
                            className="w-5 h-5"
                        />
                        {cart.length > 0 && (
                            <span className="inset-0 absolute w-4 h-4 bg-red-500 left-8 top-1 border border-white rounded-full text-center text-[10px] truncate">
                                {cart.length}
                            </span>
                        )}
                    </div>
                    <div
                        className="mt-3 relative bg-blue-600 hover:bg-blue-500 p-3 text-xs text-white font-bold rounded-full cursor-pointer"
                        onClick={() => setOpenMenu(true)}
                    >
                        <img src="/assets/add.png" alt="" className="w-5 h-5" />
                    </div>
                </div>
            )}

            {openMenu && (
                <PopOver
                    handleClose={() => setOpenMenu(false)}
                    actionButton={true}
                >
                    <div className="text-center">
                        <div className="flex flex-col gap-5">
                            <div
                                className="bg-blue-100 p-4 text-xs text-blue-600 hover:bg-blue-200 font-bold rounded-lg cursor-pointer"
                                onClick={handleCategory}
                            >
                                <h1>+ Add Category</h1>
                            </div>
                            <div
                                className="bg-blue-100 p-4 text-xs text-blue-600 hover:bg-blue-200 font-bold rounded-lg cursor-pointer"
                                onClick={handleProduct}
                            >
                                <h1>+ Add Products</h1>
                            </div>
                            <div
                                className="bg-blue-600 hover:bg-blue-500 p-4 text-xs text-white font-bold rounded-lg cursor-pointer"
                                onClick={handleManageAll}
                            >
                                <h1>Manage All</h1>
                            </div>
                        </div>
                    </div>
                </PopOver>
            )}
        </div>
    );
}

export default ContentMobile;
