import PopOverSuccess from "@/Components/PopOverSuccess";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";

function Navbar({ auth, handleLogout }) {
    const [openLogout, setOpenLogout] = useState(false);
    return (
        <div className="sticky top-0 md:bg-blue-600 py-2 md:py-6 px-5 md:px-10 lg:px-32 md:text-white z-50">
            {openLogout && (
                <div>
                    <PopOverSuccess>
                        <div className="flex gap-5">
                            <Link
                                href={route("dashboard")}
                                as="button"
                                className="border-2 border-blue-600 w-full md:w-32 py-3 md:py-2 rounded-lg md:rounded-sm text-blue-600 text-sm font-bold"
                            >
                                Back to Home
                            </Link>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="w-full md:w-32 py-2 bg-blue-600 border font-bold border-blue-600 text-white rounded-lg md:rounded-sm text-center"
                            >
                                Logout
                            </Link>
                        </div>
                    </PopOverSuccess>
                </div>
            )}
            <div className="flex justify-between items-center">
                <h1 className="font-bold uppercase text-xl">maspos</h1>

                <div
                    className="hidden md:flex lg:flex gap-5 items-center"
                    onClick={handleLogout}
                >
                    <p className="capitalize">{auth.user.name}</p>
                    <img
                        src="/assets/boy.png"
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                </div>
                <div
                    className="md:hidden lg:hidden flex gap-5 items-center"
                    onClick={() => setOpenLogout(true)}
                >
                    <p className="capitalize">{auth.user.name}</p>
                    <img
                        src="/assets/boy.png"
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
