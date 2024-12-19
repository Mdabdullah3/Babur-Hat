import Link from 'next/link';
import React from 'react';
export const metadata = {
    title: "Not Found - Ready How",
    description: "Not Found section of Ready How",
}
const NotFound = () => {
    return (
        <div>
            <section class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
                <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
                <h1 class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </h1>
                <button class="mt-5">
                    <div
                        class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                    >
                        <span
                            class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            <Link href="/">Go Home</Link>
                        </span>
                    </div>
                </button>
            </section>
        </div>
    );
};

export default NotFound;