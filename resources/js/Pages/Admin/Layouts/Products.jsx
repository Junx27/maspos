import MyContext from "@/Components/CreateContex";
import FormaterRupiah from "@/Components/FormaterRupiah";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import EditProduct from "./EditProduct";
import PopOver from "@/Components/PopOver";

function Products({ onDelete, onCart }) {
    const { delete: destroy } = useForm({});
    const [isMobile, setIsMobile] = useState(false);
    const [dataCategory, setDataCategory] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);
    const [dataProductDetail, setDataProductDetail] = useState([]);
    const {
        category,
        setCategory,
        addToCart,
        editProduct,
        setEditProduct,
        idProduct,
        setIdProduct,
    } = useContext(MyContext);

    useEffect(() => {
        const fetchDataCategory = async () => {
            const response = await axios.get("/category");
            setDataCategory(response.data);
        };
        const fetchDataProducts = async () => {
            const response = await axios.get("/product");
            setDataProduct(response.data);
        };
        if (idProduct !== null) {
            const fetchDataProduct = async () => {
                const response = await axios.get(`/product/${idProduct}`);
                setDataProductDetail(response.data);
            };

            fetchDataProduct();
        }
        fetchDataProducts();
        fetchDataCategory();
    }, [idProduct]);

    const filteredProducts = _.filter(dataProduct, (product) => {
        return category === null || product.kategori_id === category;
    });

    const handleDelete = (id) => {
        destroy(`/delete-product/${id}`);
    };
    const handleEditProduct = (id) => {
        setIdProduct(id);
        setEditProduct(true);
    };

    return (
        <div className="mx-5 md:mx-10 lg:mx-32 mt-5">
            {editProduct && !isMobile ? (
                <div className="mt-10">
                    <EditProduct
                        handleClose={() => setEditProduct(false)}
                        dataProduct={dataProductDetail}
                    />
                </div>
            ) : (
                <div>
                    {isMobile && (
                        <div>
                            <PopOver
                                actionButton={true}
                                handleClose={() => {
                                    setEditProduct(false), setIsMobile(false);
                                }}
                            >
                                <EditProduct
                                    handleClose={() => setEditProduct(false)}
                                    dataProduct={dataProductDetail}
                                />
                            </PopOver>
                        </div>
                    )}
                    <div className="flex gap-5 border-b-2 pb-2  mt-5 md:mt-10">
                        <p
                            className={`relative cursor-pointer ${
                                category === null
                                    ? "text-blue-600 font-bold"
                                    : ""
                            }`}
                            onClick={() => setCategory(null)}
                        >
                            All Categories
                            <span
                                className={`transition-all duration-500 inset-0 absolute w-full h-[2px] bg-blue-600 mt-8 ${
                                    category === null
                                        ? "opacity-100"
                                        : "opacity-0"
                                } `}
                            ></span>
                        </p>
                        {dataCategory.slice(0, 10).map((c) => (
                            <div
                                key={c.id}
                                className={`hidden md:block relative cursor-pointer ${
                                    c.id === category
                                        ? "text-blue-600 font-bold"
                                        : ""
                                }`}
                                onClick={() => setCategory(c.id)}
                            >
                                <p className="capitalize">{c.nama_kategori}</p>
                                <div
                                    className={`transition-all duration-500 inset-0 absolute w-full h-[2px] bg-blue-600 mt-8 ${
                                        c.id === category
                                            ? "opacity-100"
                                            : "opacity-0"
                                    } `}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-5 lg:gap-10 pb-20">
                        {filteredProducts.map((p) => (
                            <div
                                key={p.id}
                                className="transition-all duration-500 w-full h-[250px] md:w-[170px] lg:w-[200px] md:h-[300px] shadow-md hover:shadow-lg rounded-lg md:rounded-md overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={`storage/${p.gambar_produk}`}
                                    alt=""
                                    className="w-full h-[130px] md:h-[160px] object-cover"
                                />
                                <div className="px-3 py-2">
                                    <div className="flex justify-between">
                                        <h2 className="capitalize text-sm truncate">
                                            {p.nama_produk}
                                        </h2>
                                        {onDelete && (
                                            <button
                                                className="bg-red-600 hover:bg-red-500 text-white text-[10px] p-1 px-2 rounded-md md:rounded-sm cursor-pointer"
                                                onClick={() =>
                                                    handleDelete(p.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                    <p className="font-bold">
                                        <FormaterRupiah
                                            number={p.harga_produk}
                                        />
                                    </p>
                                    {onCart ? (
                                        <p
                                            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs p-2 text-center mx-5 md:mx-5 lg:mx-8 rounded-lg md:rounded-sm mt-5 md:mt-8 cursor-pointer"
                                            onClick={() =>
                                                addToCart({
                                                    id: p.id,
                                                    nama_produk: p.nama_produk,
                                                    harga_produk:
                                                        p.harga_produk,
                                                    gambar_produk:
                                                        p.gambar_produk,
                                                })
                                            }
                                        >
                                            + Add to Cart
                                        </p>
                                    ) : (
                                        <div>
                                            <p
                                                className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs p-2 text-center mx-5 md:mx-5 lg:mx-8 rounded-lg md:rounded-sm mt-5 md:mt-8 cursor-pointer"
                                                onClick={() =>
                                                    handleEditProduct(p.id)
                                                }
                                            >
                                                Edit Product
                                            </p>
                                            <p
                                                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs p-2 text-center mx-5 md:mx-8 rounded-lg md:rounded-sm mt-5 md:mt-8 cursor-pointer"
                                                onClick={() => {
                                                    handleEditProduct(p.id),
                                                        setIsMobile(true);
                                                }}
                                            >
                                                Edit Product
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
