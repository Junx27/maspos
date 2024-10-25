import MyContext from "@/Components/CreateContex";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useContext } from "react";

function CreateCategory({ handleClose, user_id }) {
    const {
        notificationSuccess,
        setNotificationSuccess,
        notificationError,
        setNotificationError,
    } = useContext(MyContext);
    const { data, setData, post, errors } = useForm({
        nama_kategori: "",
        user_id: user_id,
    });
    const submit = (e) => {
        e.preventDefault();
        try {
            post("/create-category");
            setNotificationSuccess(true);
        } catch (error) {
            setNotificationError(true);
        }
    };
    return (
        <div className="bg-white md:w-[500px] md:h-[300px] md:rounded-md md:shadow-lg">
            {notificationSuccess && (
                <p className="absolute -top-20 md:top-10 bg-green-500 px-5 md:px-32 p-2 text-white font-bold rounded-sm text-xs z-50">
                    Add category successfully
                </p>
            )}
            {notificationError && (
                <p className="absolute -top-20 md:top-5 bg-red-500 px-5 md:px-32 p-2 text-white font-bold rounded-sm text-xs">
                    Add category failed, please try again.
                </p>
            )}
            <h1 className="font-bold text-2xl md:text-center md:border-b py-5">
                Add Category
            </h1>
            <form onSubmit={submit} action="" className="md:px-20">
                <div className="md:mt-10">
                    <InputLabel
                        htmlFor="nama_kategori"
                        value="Category Name"
                        className="hidden md:block"
                    />

                    <TextInput
                        id="nama_kategori"
                        type="text"
                        name="nama_kategori"
                        value={data.nama_kategori}
                        placeholder="Category Name"
                        className="mt-1 block w-full"
                        autoComplete="nama_kategori"
                        isFocused={true}
                        onChange={(e) =>
                            setData("nama_kategori", e.target.value)
                        }
                    />

                    <InputError
                        message={errors.nama_kategori}
                        className="mt-2"
                    />
                    <div className="md:flex md:justify-center mt-10">
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
                                className="w-full md:w-32 py-2 bg-blue-600 border font-bold border-blue-600 text-white rounded-lg md:rounded-sm text-center"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateCategory;
