import ImgReveal from "../Comps/gif_revel"
import experic from '@/assets/pro.gif';

export default function MyExperience() {
    return (
        <>
            <section className="flex justify-center align-middle items-center flex-col h-screen">
                <ImgReveal src={experic.src}>
                    <span className="text-2xl 2xl:text-6xl font-bold md:text-4xl text-red-400">Experience </span>
                </ImgReveal>
                <div className="max-w-[900px] m-8">
                    <h1 className="font-medium 2xl:text-3xl">
                        I have been coding since 2022, but I landed my full-time job at the beginning of 2024.
                         The company I work for is relatively new, and we specialize in offering tech solutions to 
                         larger companies. As one of the senior engineers, <br/> <br/> I have a variety of tasks to handle. However, 
                         my primary focus has been on developing full-stack web applications combined with production automation 
                         for one of our clients. <br/> <br/>This role allows me to leverage my skills in both front-end and back-end development 
                         while also integrating automated processes to enhance productivity and efficiency for our client. Working in 
                         this dynamic environment has given me the opportunity to tackle complex challenges and contribute to the growth 
                         and success of the company.
                    </h1>
                </div>
            </section>
        </>
    )
}