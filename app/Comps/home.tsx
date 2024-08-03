'use client';
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react"
import skills from '@/assets/skills.gif';
import erfarenhet from '@/assets/erfarenhet.gif';
import ImgReveal from './gif_revel';
import Link from 'next/link';
import reactlogo from '@/assets/react.png';
import call from '@/assets/callMe.gif';
import { useIsVisible } from "./Hooks/useIsVisible";
import { useRef, RefObject } from "react";
import pleas from '@/assets/pleas.gif';

export default function HomeContent() {
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);

    const ref3 = useRef();
    const isVisible3 = useIsVisible(ref3);


    const social = [
        {
            img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
            href: "https://www.instagram.com/htnr_07/",
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
            href: "https://github.com/htnr76",
        },
    ]

    const skill = [
        {
            name: "React",
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png'
        },
        {
            name: "Next JS",
            img: "https://www.svgrepo.com/show/354113/nextjs-icon.svg"
        },
        {
            name: "Tailwind",
            img: "https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-9294852-7577995.png?f=webp"
        },
        {
            name: 'Prisma',
            img: "https://cdn.icon-icons.com/icons2/3914/PNG/512/prisma_logo_icon_248778.png"
        },
        {
            name: "Firebase",
            img: "https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png"
        },
        {
            name: "TypeScript",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
        },
        {
            name: 'Javascript',
            img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
            name: "Rest API",
            img: 'https://media.licdn.com/dms/image/C5112AQF49DOfOhCFSA/article-cover_image-shrink_720_1280/0/1579816811751?e=2147483647&v=beta&t=e47GGJDzoqsm4dl3qV2EjVWrxyMzIwsPmEE9Gywo83w'
        },
        {
            name: "Python",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/242px-Python-logo-notext.svg.png"
        },
        {
            name: "Git",
            img: 'https://cdn-icons-png.flaticon.com/512/8695/8695391.png'
        },
        {
            name: "CSS",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
        }
    ]
    return (
        <>
            <div ref={ref1 as any} className={`transition-opacity ease-in duration-300 ${isVisible1 ? "opacity-100" : "opacity-10"}`}>
                <section className={`flex justify-center items-center mt-24 flex-col`}>
                    <ImgReveal src={erfarenhet.src}>
                        <span className="text-[#FFD700] font-bold text-2xl sm:text-4xl md:font-bold">Experience</span>
                    </ImgReveal>
                    <h2 className="mt-10 max-w-[500px] m-4 sm:text-2xl md:font-semibold md:max-w-[800px]">
                        Over 3 years of experience of coding for my self and 1 year coding for a tech company based in Sweden.
                        <Link href={'/me'} className='text-lime-500'>
                            Whant to know more about my story?
                        </Link>
                    </h2>
                </section>
            </div>

            <div ref={ref1 as any} className={`transition-opacity ease-in duration-500 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                <section className="flex items-center justify-center mt-24 md:mt-44">
                    <Card className='max-w-[900px] overflow-visible bg-transparent md:w-[700px]'>
                        <CardHeader className="flex gap-3 items-center justify-center">
                            <ImgReveal src={skills.src}>
                                <span className="text-2xl md:text-4xl font-bold text-green-400">Skills</span>
                            </ImgReveal>
                        </CardHeader>
                        <Divider />
                        <CardBody className="grid grid-cols-4 grid-rows-3 gap-4">
                            {skill.map((pro) => {
                                return (
                                    <figure className="flex flex-col items-center">
                                        <img src={pro.img} alt={pro.name} className="h-12 w-auto block mb-2" />
                                        <figcaption className="text-center hidden sm:block">{pro.name}</figcaption>
                                    </figure>
                                );
                            })}
                        </CardBody>

                    </Card>
                </section>
            </div>

            <div ref={ref1 as any} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                <section className="flex justify-center items-center mt-24 flex-col text-xl">
                    <ImgReveal src={call.src}>
                        <span className="text-2xl font-bold md:text-4xl text-yellow-400">Want to contact me?</span>
                    </ImgReveal>

                    <div className="md:grid grid-cols-2 w-full font-semibold">
                        <div className="col-start-1 m-8 text-center">
                            <h1>Send me an email <a href="mailto:nikitacpy@gmail.com">nikitacpy@gmail.com</a></h1>
                        </div>

                        <div className="col-start-2 text-center m-8">
                            <h1>You can also follow my
                                <ImgReveal src={pleas.src}>
                                    <span className="text-teal-500"> Social media</span>
                                </ImgReveal>
                            </h1>

                            <div className="grid grid-cols-3">
                                {social.map((soci) => {
                                    return (
                                        <div className="flex justify-center items-center">
                                            <Link href={soci.href}>
                                                <img src={soci.img} alt={soci.href} className="w-10 mt-5 h-auto" />
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </>
    );
}