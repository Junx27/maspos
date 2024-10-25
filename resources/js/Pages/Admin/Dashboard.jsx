import React, { useState } from "react";
import Navbar from "./Layouts/Navbar";
import Content from "./Layouts/Content";
import CreateCategory from "./Layouts/CreateCategory";
import Products from "./Layouts/Products";
import CreateProduct from "./Layouts/CreateProduct";
import { Head } from "@inertiajs/react";
import ManageAll from "./Layouts/ManageAll";
import Cart from "./Layouts/Cart";
import ContentMobile from "./Layouts/ContentMobile";
import PopOver from "@/Components/PopOver";
import CartMobile from "./Layouts/CartMobile";
import Logout from "./Layouts/Logout";

function Dashboard({ auth }) {
    const [category, setCategory] = useState(false);
    const [product, setProduct] = useState(false);
    const [manageAll, setManageAll] = useState(false);
    const [cart, setCart] = useState(false);
    const [openLogout, setOpenLogout] = useState(false);
    const handleCategory = () => {
        setCategory(true);
    };
    const handleProduct = () => {
        setProduct(true);
    };
    const handleCart = () => {
        setCart(true);
    };
    const handleManageAll = () => {
        setManageAll(true);
    };

    return (
        <div className="bg-gray-50/50 h-screen">
            <Head title="Dashboard" />
            {!cart && !manageAll && (
                <div className="">
                    <Navbar
                        auth={auth}
                        handleLogout={() => setOpenLogout(true)}
                    />
                </div>
            )}
            {openLogout && (
                <div>
                    <Logout />
                </div>
            )}
            {category && (
                <div>
                    <div className="block md:hidden">
                        <PopOver
                            handleClose={() => setCategory(false)}
                            actionButton={true}
                        >
                            <CreateCategory user_id={auth.user.id} />
                        </PopOver>
                    </div>
                    <div className="hidden pt-10 md:flex justify-center">
                        <CreateCategory
                            user_id={auth.user.id}
                            handleClose={() => setCategory(false)}
                        />
                    </div>
                </div>
            )}
            {product && (
                <div>
                    <div className="block md:hidden">
                        <PopOver
                            handleClose={() => setProduct(false)}
                            actionButton={true}
                        >
                            <CreateProduct user_id={auth.user.id} />
                        </PopOver>
                    </div>
                    <div className="hidden pt-10 md:flex justify-center">
                        <CreateProduct
                            user_id={auth.user.id}
                            handleClose={() => setProduct(false)}
                        />
                    </div>
                </div>
            )}
            {manageAll && (
                <div>
                    <ManageAll handleClose={() => setManageAll(false)} />
                </div>
            )}
            {cart && (
                <div>
                    <div className="block md:hidden">
                        <CartMobile handleClose={() => setCart(false)} />
                    </div>
                    <div className="hidden md:pt-10 lg:pt-20 md:flex justify-center">
                        <Cart
                            handleClose={() => setCart(false)}
                            user_id={auth.user.id}
                        />
                    </div>
                </div>
            )}
            {!category && !product && !manageAll && !cart && !openLogout && (
                <div>
                    <div className="mt-5 hidden md:block lg:block">
                        <Content
                            handleCategory={handleCategory}
                            handleProduct={handleProduct}
                            handleCart={handleCart}
                            handleManageAll={handleManageAll}
                        />
                    </div>
                    <div className="fixed bottom-0 w-full md:hidden lg:hidden">
                        <ContentMobile
                            handleCategory={handleCategory}
                            handleProduct={handleProduct}
                            handleCart={handleCart}
                            handleManageAll={handleManageAll}
                        />
                    </div>
                    <div className="hidden md:block lg:block">
                        <Products onCart={true} />
                    </div>
                </div>
            )}
            {!cart && !manageAll && (
                <div className="block md:hidden lg:hidden">
                    <Products onCart={true} />
                </div>
            )}
        </div>
    );
}

export default Dashboard;
