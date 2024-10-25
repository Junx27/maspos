import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [category, setCategory] = useState(null);
    const [editProduct, setEditProduct] = useState(false);
    const [idProduct, setIdProduct] = useState(null);
    const [categoryAll, setCategoryAll] = useState(false);
    const [payment, setPayment] = useState(false);
    const [history, setHistory] = useState(false);
    const [valueName, setValueName] = useState("");
    const [cart, setCart] = useState([]); // State untuk keranjang belanja
    const [notificationSuccess, setNotificationSuccess] = useState(false);
    const [notificationError, setNotificationError] = useState(false);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            );
            if (existingProduct) {
                // Jika produk sudah ada, tingkatkan qty
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                // Jika produk belum ada, tambahkan produk baru dengan qty 1
                return [...prevCart, { ...product, qty: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        // Hapus produk dari keranjang berdasarkan productId
        setCart((prevCart) => {
            return prevCart.filter((item) => item.id !== productId);
        });
    };

    const increaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.id === productId
            );
            if (existingProduct) {
                if (existingProduct.qty > 1) {
                    // Jika qty lebih dari 1, kurangi qty
                    return prevCart.map((item) =>
                        item.id === productId
                            ? { ...item, qty: item.qty - 1 }
                            : item
                    );
                } else {
                    // Jika qty 1, hapus produk dari keranjang
                    return prevCart.filter((item) => item.id !== productId);
                }
            }
            return prevCart; // Jika produk tidak ada, kembalikan keranjang yang sama
        });
    };

    return (
        <MyContext.Provider
            value={{
                idProduct,
                setIdProduct,
                editProduct,
                setEditProduct,
                category,
                setCategory,
                categoryAll,
                setCategoryAll,
                history,
                setHistory,
                payment,
                setPayment,
                valueName,
                setValueName,
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                notificationSuccess,
                setNotificationSuccess,
                notificationError,
                setNotificationError,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

// Custom hook untuk menggunakan MyContext
export const useMyContext = () => {
    return useContext(MyContext);
};

export default MyContext;
