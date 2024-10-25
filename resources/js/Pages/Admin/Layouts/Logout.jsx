import { Link } from "@inertiajs/react";
import React from "react";

function Logout() {
    return (
        <div className="bg-white md:w-[500px] md:h-[250px] md:rounded-md md:shadow-lg p-10 mx-auto mt-10">
            <h1 className="font-bold text-2xl md:px-20 md:border-b py-5">
                Logout Confirmation
            </h1>
            <div className="flex justify-center gap-5 mt-10">
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
        </div>
    );
}

export default Logout;
