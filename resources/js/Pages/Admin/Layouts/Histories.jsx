import MyContext from "@/Components/CreateContex";
import FormaterRupiah from "@/Components/FormaterRupiah";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";

function Histories() {
    const { delete: destroy } = useForm({});
    const { history, setHistory } = useContext(MyContext);
    const [dataTransaksi, setDataTransaksi] = useState([]);

    useEffect(() => {
        const fetchDataTransaksi = async () => {
            const response = await axios.get("/payment");
            setDataTransaksi(response.data);
        };
        fetchDataTransaksi();
    }, []);
    const totalPurchase = _.sumBy(dataTransaksi, "total_pembelian");
    const totalPayment = _.sumBy(dataTransaksi, "total_pembayaran");
    const totalChange = _.sumBy(dataTransaksi, "total_kembalian");
    const handleDelete = (id) => {
        destroy(`/delete-payment/${id}`);
    };
    return (
        <div className="mx-5 md:mx-10 lg:mx-32 mt-10 pb-32 text-xs md:text-md">
            <div className="grid grid-cols-3 gap-5 md:gap-10 border-b pb-5">
                <h2 className="font-bold">Total Purchase</h2>
                <h2 className="font-bold">Total Payment</h2>
                <h2 className="font-bold">Total Change</h2>
            </div>
            <div className="">
                {dataTransaksi.map((t, index) => (
                    <div
                        key={t.id}
                        className="grid grid-cols-3 gap-5 md:gap-10 py-5 border-b items-center"
                    >
                        <div className="flex gap-5 items-center">
                            <h1>{index + 1}.</h1>
                            <FormaterRupiah number={t.total_pembelian} />
                        </div>
                        <div>
                            <FormaterRupiah number={t.total_pembayaran} />
                        </div>
                        <div className="flex justify-between items-center">
                            <FormaterRupiah number={t.total_kembalian} />
                            <button
                                className="hidden md:block bg-red-600 hover:bg-red-500 text-white text-xs p-2 px-3 rounded-sm cursor-pointer"
                                onClick={() => handleDelete(t.id)}
                            >
                                Remove Item
                            </button>
                            <button
                                className="block md:hidden"
                                onClick={() => handleDelete(t.id)}
                            >
                                <img
                                    src="/assets/close-red.png"
                                    alt=""
                                    className="w-3 h-3"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-5 md:gap-10 border-b py-5">
                <div className="font-bold ml-8">
                    <FormaterRupiah number={totalPurchase} />
                </div>
                <div className="font-bold">
                    <FormaterRupiah number={totalPayment} />
                </div>
                <div className="font-bold">
                    <FormaterRupiah number={totalChange} />
                </div>
            </div>
            <div className="flex justify-end mt-20">
                <button
                    type="button"
                    className="border-2 border-blue-600 w-full md:w-32 py-3 md:py-2 rounded-lg md:rounded-sm text-blue-600 text-sm font-bold"
                    onClick={() => setHistory(false)}
                >
                    Back to Manage
                </button>
            </div>
        </div>
    );
}

export default Histories;
