import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

function Welcome() {
    const [viewPassword, setViewPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="bg-white h-screen">
            <div className="inset-0 bg-[#1963D2] h-1/2"></div>
            <div className="flex justify-center md:-mt-[200px]">
                <form
                    onSubmit={submit}
                    action=""
                    className="bg-white w-full md:w-[500px] md:h-[400px] md:rounded-md md:shadow-lg py-5 px-5 md:py-10 md:px-20"
                >
                    <h1 className="font-bold text-2xl text-center">Login</h1>
                    <div className="mt-10">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="mt-4 relative">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type={viewPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                        <div
                            className="inset-0 absolute top-9 ml-56 left-[90px] md:left-20 z-50"
                            onClick={() => setViewPassword(!viewPassword)}
                        >
                            <img
                                src={
                                    viewPassword
                                        ? "/assets/hide.png"
                                        : "/assets/view.png"
                                }
                                alt=""
                                className="w-5 h-5"
                            />
                        </div>
                    </div>
                    <div className="mt-10 flex items-center justify-center">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Login
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Welcome;
