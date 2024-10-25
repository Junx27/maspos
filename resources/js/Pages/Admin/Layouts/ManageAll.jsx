import MyContext from "@/Components/CreateContex";
import FormaterRupiah from "@/Components/FormaterRupiah";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import ContentManage from "./ContentManage";
import Products from "./Products";
import Categories from "./Categories";
import Histories from "./Histories";

function ManageAll({ handleClose }) {
    const { editProduct, categoryAll, setCategoryAll, history, setHistory } =
        useContext(MyContext);

    const handleCategory = () => {
        setCategoryAll(true);
    };
    const handleHistory = () => {
        setHistory(true);
    };
    return (
        <div className="mt-5">
            {categoryAll && (
                <div>
                    <Categories />
                </div>
            )}
            {history && (
                <div>
                    <Histories />
                </div>
            )}
            {!editProduct && !categoryAll && !history && (
                <div>
                    <ContentManage
                        handleHome={handleClose}
                        handleCategory={handleCategory}
                        handleHistory={handleHistory}
                    />
                </div>
            )}
            {!categoryAll && !history && (
                <div>
                    <Products onDelete={true} onCart={false} />
                </div>
            )}
        </div>
    );
}

export default ManageAll;
