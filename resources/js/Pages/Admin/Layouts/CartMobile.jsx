import React, { useContext, useState } from "react";
import MyContext from "@/Components/CreateContex";
import FormaterRupiah from "@/Components/FormaterRupiah";
import _ from "lodash";
import Payment from "./Payment";
import PopOver from "@/Components/PopOver";
import PopOverSuccess from "@/Components/PopOverSuccess";

function CartMobile({ handleClose, user_id }) {
    const [openPayment, setOpenPayment] = useState(false);
    const {
        cart,
        payment,
        setPayment,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useContext(MyContext);
    const total = _.sumBy(cart, (c) => c.harga_produk * c.qty);
    const handlePayment = () => {
        setOpenPayment(true);
        setPayment(true);
    };
    return (
        <div className="block md:hidden lg:hidden mx-5 pb-10">
            {openPayment && (
                <div>
                    {payment ? (
                        <PopOver
                            handleClose={() => setOpenPayment(false)}
                            actionButton={true}
                        >
                            <Payment
                                handleClosePayment={() => setOpenPayment(false)}
                                user_id={user_id}
                            />
                        </PopOver>
                    ) : (
                        <PopOverSuccess>
                            <Payment />
                        </PopOverSuccess>
                    )}
                </div>
            )}
            <div>
                <h1 className="pt-5 px-2">Cart</h1>
                {cart.length === 0 ? (
                    <p className="text-center mt-10">Empty</p>
                ) : (
                    <div className="">
                        {cart.map((c) => (
                            <div
                                key={c.id}
                                className="grid grid-cols-1 gap-10 items-center py-8"
                            >
                                <div className="bg-white p-4 pb-8">
                                    <div
                                        className="flex justify-end border-b py-4"
                                        onClick={() => removeFromCart(c.id)}
                                    >
                                        <img
                                            src="/assets/close-red.png"
                                            alt=""
                                            className="w-5 h-5"
                                        />
                                    </div>
                                    <div className="flex justify-between font-semibold text-sm border-b py-4">
                                        <h3>PRODUCT</h3>
                                        <h3 className="capitalize text-blue-500">
                                            {c.nama_produk}
                                        </h3>
                                    </div>
                                    <div className="flex justify-between font-semibold text-sm border-b py-4">
                                        <h3>PRICE</h3>
                                        <h3>
                                            <FormaterRupiah
                                                number={c.harga_produk}
                                            />
                                        </h3>
                                    </div>
                                    <div className="flex justify-between font-semibold text-sm border-b py-4">
                                        <h3>QUANTITY</h3>
                                        <div>
                                            <div className="bg-white w-32 rounded-full flex justify-between">
                                                <button
                                                    className="bg-blue-600 hover:bg-blue-500 text-white w-7 h-7 text-center pb-1 rounded-full font-bold cursor-pointer"
                                                    onClick={() =>
                                                        decreaseQuantity(c.id)
                                                    }
                                                >
                                                    -
                                                </button>
                                                <p>{c.qty}</p>
                                                <button
                                                    className="bg-blue-600 hover:bg-blue-500 text-white w-7 h-7 text-center pb-1 rounded-full font-bold cursor-pointer"
                                                    onClick={() =>
                                                        increaseQuantity(c.id)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between font-semibold text-sm border-b py-4">
                                        <h3>SUB TOTAL</h3>
                                        <h3>
                                            <FormaterRupiah
                                                number={c.harga_produk * c.qty}
                                            />
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="bg-white p-4 pb-8">
                    <div className="text-sm border-b py-4">
                        <h3>Cart Total</h3>
                    </div>
                    <div className="py-4">
                        <div className="flex justify-between font-semibold text-sm">
                            <h2>Total</h2>
                            <h2>
                                <FormaterRupiah number={total} />
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex flex-col gap-5">
                        {cart.length > 0 && (
                            <button
                                type="button"
                                className="border-2 border-blue-600 w-full py-2 rounded-lg bg-blue-600 text-sm text-white font-bold"
                                onClick={handlePayment}
                            >
                                Pay Bill
                            </button>
                        )}
                        <button
                            type="button"
                            className="border-2 border-blue-600 w-full py-2 rounded-lg text-blue-600 text-sm font-bold"
                            onClick={handleClose}
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartMobile;
