import MyContext from "@/Components/CreateContex";
import FormaterRupiah from "@/Components/FormaterRupiah";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import _ from "lodash";
import React, { useContext, useEffect } from "react";
import PaymentSuccess from "./PaymentSuccess";

function Payment({ handleClosePayment, user_id }) {
    const {
        cart,
        notificationSuccess,
        setNotificationSuccess,
        notificationError,
        setNotificationError,
        payment,
        setPayment,
    } = useContext(MyContext);
    const total = _.sumBy(cart, (c) => c.harga_produk * c.qty);

    const { data, setData, post, errors } = useForm({
        total_pembelian: total,
        total_pembayaran: "",
        total_kembalian: 0,
        user_id: user_id,
        cart: cart,
    });

    useEffect(() => {
        const totalPembayaran = parseFloat(data.total_pembayaran);
        if (!isNaN(totalPembayaran) && totalPembayaran >= total) {
            setData("total_kembalian", totalPembayaran - total);
        } else {
            setData("total_kembalian", 0);
        }
    }, [data.total_pembayaran, total, setData]);

    const submit = (e) => {
        e.preventDefault();
        try {
            post("/create-payment", { cart: data.cart });
            setNotificationSuccess(true);
            setPayment(false);
        } catch (error) {
            setNotificationError(false);
        }
    };

    return (
        <div>
            {notificationSuccess ? (
                <div>
                    <PaymentSuccess
                        handleClose={() => window.location.reload()}
                        totalPayment={total}
                    />
                </div>
            ) : (
                <div className="bg-white md:w-[500px] md:h-[400px] md:rounded-md md:shadow-lg mx-auto">
                    <h1 className="font-bold text-2xl md:text-center md:border-b py-5">
                        Add Payment
                    </h1>
                    <form onSubmit={submit} className="md:px-20">
                        <div className="md:mt-10">
                            <InputLabel
                                htmlFor="total_pembayaran"
                                value="Total Payment"
                                className="hidden md:block"
                            />
                            <TextInput
                                id="total_pembayaran"
                                type="number"
                                name="total_pembayaran"
                                value={data.total_pembayaran}
                                className="mt-1 block w-full"
                                autoComplete="total_pembayaran"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("total_pembayaran", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.total_pembayaran}
                                className="mt-2"
                            />
                            <input
                                id="total_kembalian"
                                type="number"
                                name="total_kembalian"
                                value={data.total_kembalian}
                                className="hidden"
                                readOnly
                            />
                            <div className="mt-10 font-bold flex justify-between">
                                <h2>Total Purchase</h2>
                                <h2>
                                    <FormaterRupiah
                                        number={data.total_pembelian}
                                    />
                                </h2>
                            </div>
                            <div className="mt-2 font-bold flex justify-between">
                                <h2>Total Refund</h2>
                                <h2>
                                    <FormaterRupiah
                                        number={data.total_kembalian}
                                    />
                                </h2>
                            </div>
                            <div className="md:flex md:justify-center mt-10">
                                <div className="flex gap-5 items-center">
                                    <button
                                        type="button"
                                        className="hidden md:block border-2 border-blue-600 w-32 py-2 rounded-sm text-blue-600 text-sm font-bold"
                                        onClick={handleClosePayment}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-full md:w-32 py-2 bg-blue-600 border font-bold border-blue-600 text-white rounded-lg md:rounded-sm text-center"
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Payment;
