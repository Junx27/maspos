import MyContext from "@/Components/CreateContex";
import React, { useContext } from "react";

function Content({
    handleCategory,
    handleProduct,
    handleCart,
    handleManageAll,
}) {
    const { cart } = useContext(MyContext);
    return (
        <div className="md:mx-10 lg:mx-32">
            <div className="flex justify-end">
                <div className="flex gap-5">
                    <div
                        className="bg-blue-100 p-2 px-4 text-xs text-blue-600 hover:bg-blue-200 font-bold rounded-sm cursor-pointer"
                        onClick={handleCategory}
                    >
                        <h1>+ Add Category</h1>
                    </div>
                    <div
                        className="bg-blue-100 p-2 px-4 text-xs text-blue-600 hover:bg-blue-200 font-bold rounded-sm cursor-pointer"
                        onClick={handleProduct}
                    >
                        <h1>+ Add Products</h1>
                    </div>
                    <div
                        className="relative bg-blue-600 hover:bg-blue-500 p-2 px-4 text-xs text-white font-bold rounded-sm cursor-pointer"
                        onClick={handleCart}
                    >
                        <h1>Cart</h1>
                        {cart.length > 0 && (
                            <span className="inset-0 absolute w-4 h-4 bg-red-500 left-12 -top-1 border border-white rounded-full text-center text-[10px] truncate">
                                {cart.length}
                            </span>
                        )}
                    </div>
                    <div
                        className="bg-blue-600 hover:bg-blue-500 p-2 px-4 text-xs text-white font-bold rounded-sm cursor-pointer"
                        onClick={handleManageAll}
                    >
                        <h1>Manage All</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
