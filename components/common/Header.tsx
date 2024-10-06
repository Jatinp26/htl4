"use client"

import Logo from "@/public/logo/HTL_Logo.webp"
import Image from "next/image";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu11Icon } from 'hugeicons-react';


import { useState } from "react";

export default function Header() {

    const [open, setOpen] = useState(false);

    const NavItems = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About Us",
            href: "#aboutus",
        },
        {
            name: "Partners",
            href: "#partners",
        },
        {
            name: "Contact",
            href: "#contact",
        }
    ];
    return (

        <header className="fixed top-0 left-0 right-0 flex bg-custom-gradient backdrop-blur-10 z-50 w-full py-6 px-5 sm:px-10 lg:px-20">
            <div className="flex justify-between w-full items-center">
                <Image src={Logo} width={50} alt="Hack The League Logo" className="pointer-events-none" />
                <div className="hidden fixed right-0 mx-5   max-sm:block">
                    <Sheet
                        open={open}
                        onOpenChange={
                            (isOpen) => {
                                setOpen(isOpen);
                            }
                        }
                    >
                        <SheetTrigger asChild>
                            <Menu11Icon color="#ffffff" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    <Link href="/" onClick={() => setOpen(false)}>
                                        <Image src={Logo} width={50} alt="Hack The League Logo" className="pointer-events-none" />
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="p-4 items-center justify-center size-full flex flex-col gap-5 list-none">
                                {NavItems.map((item, index) => (
                                    <div key={item.name}>
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="text-white font-medium text-base hover:text-opacity-50 transition ease-in">
                                            {item.name}
                                        </Link>
                                    </div>
                                ))}

                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                <nav className="p-4 max-sm:hidden  flex gap-5 list-none">
                    {NavItems.map((item, index) => (
                        <div key={item.name}>
                            <Link
                                key={index}
                                href={item.href}
                                className="text-white font-medium text-base hover:text-opacity-50 transition ease-in">
                                {item.name}
                            </Link>
                        </div>
                    ))}

                </nav>
            </div>
        </header>
    );
}