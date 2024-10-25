import React, { useContext, useState } from "react";
import MyContext from "@/Components/CreateContex";
import FormaterRupiah from "@/Components/FormaterRupiah";
import _ from "lodash";
import Payment from "./Payment";

function Cart({ handleClose, user_id }) {
    const [payment, setPayment] = useState(false);
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
        useContext(MyContext);
    const total = _.sumBy(cart, (c) => c.harga_produk * c.qty);
    const handlePayment = () => {
        setPayment(true);
    };
    return (
        <div className="w-full mx-10 lg:mx-32 pt-5 lg:mt-10 pb-32">
            {payment && (
                <div>
                    <Payment
                        handleClosePayment={() => setPayment(false)}
                        user_id={user_id}
                    />
                </div>
            )}
            {!payment && (
                <div>
                    <div className="grid grid-cols-3 gap-10 border-b pb-5 px-10">
                        <h2 className="font-bold">Product</h2>
                        <h2 className="font-bold text-center">QTY</h2>
                        <h2 className="font-bold pl-3">Sub Total</h2>
                    </div>
                    {cart.length === 0 ? (
                        <p className="text-center mt-10">Empty</p>
                    ) : (
                        <div className="">
                            {cart.map((c, index) => (
                                <div
                                    key={c.id}
                                    className="grid grid-cols-3 gap-10 items-center border-b py-8"
                                >
                                    <div className="flex gap-5 items-center">
                                        <p className="font-bold w-5">
                                            {index + 1}.
                                        </p>
                                        <img
                                            src={`storage/${c.gambar_produk}`}
                                            alt=""
                                            className="w-20 h-20 lg:w-[150px] lg:h-[150px] rounded-md object-cover"
                                        />
                                        <div className="font-bold">
                                            <h3 className="capitalize">
                                                {c.nama_produk}
                                            </h3>
                                            <p>
                                                <FormaterRupiah
                                                    number={c.harga_produk}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
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
                                    <div>
                                        <div className="flex justify-between">
                                            <h2 className="font-bold">
                                                <FormaterRupiah
                                                    number={
                                                        c.harga_produk * c.qty
                                                    }
                                                />
                                            </h2>
                                            <button
                                                className="bg-red-600 hover:bg-red-500 text-white text-xs p-2 px-3 rounded-sm cursor-pointer"
                                                onClick={() =>
                                                    removeFromCart(c.id)
                                                }
                                            >
                                                Remove Item
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="font-bold grid grid-cols-3 gap-10 mt-10">
                        <div></div>
                        <div></div>
                        <div>
                            <div className="flex justify-between">
                                <h2>Total</h2>
                                <h2>
                                    <FormaterRupiah number={total} />
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-20">
                        <div className="flex gap-5">
                            <button
                                type="button"
                                className="border-2 border-blue-600 w-32 py-2 rounded-sm text-blue-600 text-sm font-bold"
                                onClick={handleClose}
                            >
                                Back to Home
                            </button>
                            {cart.length > 0 && (
                                <button
                                    type="button"
                                    className="border-2 border-blue-600 w-32 py-2 rounded-sm bg-blue-600 text-sm text-white font-bold"
                                    onClick={handlePayment}
                                >
                                    Pay Bill
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
