'use client';
import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const pathname = usePathname();
    const paths = [
        {
            titel: "Home",
            href: "/",
            icon: "House"
        },
        {
            titel: "Experience",
            href: "/experience",
            icon: "Star"
        },
        {
            titel: "About me",
            href: "/me",
            icon: "PersonStanding"
        },
        {
            titel: "Technologi",
            href: "/tech",
            icon: "Cpu"
        }
    ]


    return (
        <Navbar className="bg-inherit shadow-lg sm:hidden">
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Nikita Reztsov</p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarMenu className="bg-inherit">
                {paths.map((path) => {
                    return (
                        <Link className="m-2" color={pathname === path.href ? 'primary' : 'danger'} href={path.href}>
                            {path.titel}
                        </Link>
                    );
                })}
            </NavbarMenu>
        </Navbar>
    );
}
