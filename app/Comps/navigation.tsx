'use client';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { House, Star, PersonStanding, Cpu } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const icons: { [key: string]: React.ComponentType } = {
    House: House,
    Star: Star,
    PersonStanding: PersonStanding,
    Cpu: Cpu,
};

export default function Nav() {
    const pathname = usePathname();
    console.log(pathname);

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
        <>
            <main className=" text-white hidden items-center justify-center w-full sm:flex sticky flex-wrap  top-4">
                <Breadcrumbs color={'danger'} variant="solid" radius="full">
                    {paths.map((path) => {
                        const Icon = (icons as { [key: string]: React.ComponentType })[path.icon];
                        return (
                            <BreadcrumbItem 
                                color={pathname === path.href ? 'primary' : 'danger'} 
                                startContent={<Icon />} 
                                key={path.href}
                            >
                                <Link href={path.href}>
                                    {path.titel}
                                </Link>
                            </BreadcrumbItem>
                        );
                    })}
                </Breadcrumbs>
            </main>
        </>
    )
}