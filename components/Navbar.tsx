
import Link from 'next/link';
import Image from "next/image";
import React from 'react';


import { auth, signOut, signIn } from '@/auth';
import { BadgePlus, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


//<span className='max-sm:hidden'>Create</span>
//<BadgePlus className="size-6 sm:hidden" />

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span
                                    className="max-sm:hidden align-middle select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 border-[3px] border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                                >
                                    Create
                                </span>
                                <BadgePlus className="size-6 sm:hidden" />

                            </Link>
                            <form action={async () => {
                                "use server";

                                await signOut({ redirectTo: "/" });
                            }}>
                                <button type="submit">
                                    <span
                                        className="max-sm:hidden align-middle select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 border-[3px] border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                                    >
                                        Log Out
                                    </span>
                                    <LogOut className="size-6 sm:hidden text-red-500" />

                                </button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <Avatar className="size-10">
                                    <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
                                    <AvatarFallback>AV</AvatarFallback>

                                </Avatar>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";
                            await signIn('github')
                        }}>
                            <button type="submit">
                                <span
                                    className="max-sm:hidden align-middle select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 border-[3px] border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full"
                                >
                                    Log In
                                </span>

                            </button>

                        </form>

                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
