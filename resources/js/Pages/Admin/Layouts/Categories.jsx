import MyContext from "@/Components/CreateContex";
import { useForm } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";

function Categories() {
    const { delete: destroy } = useForm({});
    const { setCategoryAll, notificationSuccess, setNotificationSuccess } =
        useContext(MyContext);
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
        const fetchDataCategory = async () => {
            const response = await axios.get("/category");
            setDataCategory(response.data);
        };
        fetchDataCategory();
    }, []);

    const handleDelete = (id) => {
        try {
            setNotificationSuccess(true);
            destroy(`/delete-category/${id}`);
        } catch (error) {
            alert("gagal");
        }
    };

    return (
        <div className="mx-5 md:mx-10 lg:mx-32 pt-5 md:mt-10 pb-32">
            {notificationSuccess && (
                <p className="absolute top-5 bg-green-500 px-5 md:px-32 p-2 text-white font-bold rounded-sm text-xs">
                    Delete category successfully
                </p>
            )}
            <h1 className="md:font-bold md:text-center text-sm md:text-2xl md:border-b pb-5">
                All Categories
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-10 mt-10">
                {dataCategory.map((c) => (
                    <div
                        key={c.id}
                        className="transition-all duration-500 flex flex-col md:justify-between gap-5 md:gap-5 lg:gap-10 p-5 shadow-lg rounded-md hover:shadow-xl cursor-pointer"
                    >
                        <div className="md:hidden lg:hidden flex justify-end">
                            <button
                                className="block md:hidden"
                                onClick={() => handleDelete(c.id)}
                            >
                                <img
                                    src="/assets/close-red.png"
                                    alt=""
                                    className="w-3 h-3"
                                />
                            </button>
                        </div>
                        <p className="capitalize truncate text-xs text-center">
                            {c.nama_kategori}
                        </p>
                        <button
                            className="hidden md:block bg-red-600 hover:bg-red-500 text-white text-[10px] p-1 px-2 rounded-sm cursor-pointer"
                            onClick={() => handleDelete(c.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-20 flex justify-end">
                <button
                    type="button"
                    className="border-2 border-blue-600 w-full md:w-32 py-3 md:py-2 rounded-lg md:rounded-sm text-blue-600 text-sm font-bold"
                    onClick={() => setCategoryAll(false)}
                >
                    Back to Manage
                </button>
            </div>
        </div>
    );
}

export default Categories;
