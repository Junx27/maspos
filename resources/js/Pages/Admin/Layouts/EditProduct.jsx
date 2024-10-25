import MyContext from "@/Components/CreateContex";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

function EditProduct({ handleClose, dataProduct }) {
    const { idProduct } = useContext(MyContext);
    const [image, setImage] = useState(null);
    const [dataCategory, setDataCategory] = useState([]);
    const { data, setData, post, errors } = useForm({
        _method: "PUT",
        gambar_produk: null,
        nama_produk: "",
        harga_produk: "",
        kategori_id: "",
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setData("gambar_produk", file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        const fetchDataCategory = async () => {
            const response = await axios.get("/category");
            setDataCategory(response.data);
        };
        if (dataProduct) {
            setData({
                _method: "PUT",
                gambar_produk: dataProduct.gambar_produk,
                nama_produk: dataProduct.nama_produk,
                harga_produk: dataProduct.harga_produk,
                kategori_id: dataProduct.kategori_id,
            });
        }
        fetchDataCategory();
    }, [dataProduct]);

    const submit = (e) => {
        e.preventDefault();
        post(`/update-product/${idProduct}`);
    };

    return (
        <div className="bg-white md:w-[790px] md:h-[600px] md:rounded-md md:shadow-lg mx-auto">
            <h1 className="font-bold text-xl md:text-2xl md:px-20 md:border-b py-5">
                Edit Product
            </h1>
            <form onSubmit={submit} action="" className="md:px-20 md:mt-10">
                <div className="flex flex-col md:flex-row md:gap-20">
                    <div className="md:w-64 relative">
                        <img
                            src="/assets/cloud-upload.png"
                            alt=""
                            className="block md:hidden lg:hidden w-5 h-5 inset-0 absolute top-8 left-72 ml-8"
                        />
                        <label
                            htmlFor="gambar_produk"
                            className="hidden md:block lg:block cursor-pointer"
                        >
                            <div
                                className={`w-[180px] h-[180px] bg-blue-50 rounded-md text-center ${
                                    image === null ? "p-0" : "p-0"
                                }`}
                            >
                                <img
                                    src={`${
                                        image === null
                                            ? `storage/${data.gambar_produk}`
                                            : image
                                    }`}
                                    alt=""
                                    className={`${
                                        image === null
                                            ? "w-full h-full object-cover rounded-md mt-0"
                                            : "w-full h-full object-cover rounded-md mt-0"
                                    }`}
                                />
                                <p className="text-xs text-blue-600 mt-3">
                                    {image === null
                                        ? "  Upload Image"
                                        : "Change Image"}
                                </p>
                            </div>
                        </label>
                        <input
                            type="file"
                            id="gambar_produk"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="my-5 block md:hidden lg:hidden w-full text-sm text-gray-500 py-3 px-2 border file:hidden rounded-lg md:rounded-sm border-gray-300 shadow-sm focus:border-[#1963D2] focus:ring-[#1963D2] "
                        />
                    </div>
                    <div className="w-full">
                        <div className="w-full">
                            <InputLabel
                                htmlFor="nama_produk"
                                value="Product Name"
                                className="hidden md:block"
                            />

                            <TextInput
                                id="nama_produk"
                                type="text"
                                name="nama_produk"
                                value={data.nama_produk}
                                placeholder="Product Name"
                                className="mt-1 block w-full"
                                autoComplete="nama_produk"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("nama_produk", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.nama_produk}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-full my-5">
                            <InputLabel
                                htmlFor="harga_produk"
                                value="Price"
                                className="hidden md:block"
                            />

                            <TextInput
                                id="harga_produk"
                                type="text"
                                name="harga_produk"
                                value={data.harga_produk}
                                placeholder="Price"
                                className="mt-1 block w-full"
                                autoComplete="harga_produk"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("harga_produk", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.harga_produk}
                                className="mt-2"
                            />
                        </div>
                        <div className="w-full">
                            <InputLabel
                                htmlFor="kategori_id"
                                value="Select Category"
                                className="hidden md:block"
                            />

                            <div className="mb-5 md:mb-10 mt-5">
                                <select
                                    name="kategori_id"
                                    value={data.kategori_id}
                                    onChange={(e) =>
                                        setData("kategori_id", e.target.value)
                                    }
                                    className="w-full rounded-lg md:rounded-sm border-gray-300 shadow-sm focus:border-[#1963D2] focus:ring-[#1963D2]"
                                >
                                    <option value="">Select a category</option>
                                    {dataCategory.map((category, index) => (
                                        <option key={index} value={category.id}>
                                            {category.nama_kategori}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <InputError
                                message={errors.kategori_id}
                                className="mt-2"
                            />
                        </div>

                        <div className="md:flex md:justify-end mt-10 md:mt-32">
                            <div className="flex gap-5 items-center">
                                <button
                                    type="button"
                                    className="hidden md:block border-2 border-blue-600 w-32 py-2 rounded-sm text-blue-600 text-sm font-bold"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="w-full md:w-32 py-2 font-bold bg-blue-600 border border-blue-600 text-white rounded-lg md:rounded-sm text-center"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;
