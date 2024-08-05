import Robot from "./3d";
import speed from '@/assets/speed.gif';
import Nav from "./navigation";
import ImgReveal from "./gif_revel";
import ux from '@/assets/ux_animation.gif';
import running from '@/assets/running.gif'
import HomeContent from "./home";
import jag from '@/assets/jag.gif'

export default function Hero() {
    return (
        <main>
            <div className="sm:grid grid-rows-1 grid-cols-2 w-full h-full mt-24 md:mt-10 2xl:grid-cols-4">
                <section className="flex align-middle 2xl:col-start-2">
                    <div className="flex flex-col justify-center items-center text-center m-2 col-start-1 w-full sm:justify-self-center">
                        <ImgReveal src={jag.src}>
                            <span className="text-2xl 2xl:text-6xl w-full text-purple-400 font-semibold flex justify-center items-center sm:text-4xl sm:font-bold">
                                Nikita Reztsov
                            </span>
                        </ImgReveal>
                        <h2 className="m-4 w-full sm:text-2xl 2xl:text-3xl md:font-semibold ">
                            Self taught full-stack developer, with passion for great&nbsp;
                            <ImgReveal src={ux.src}>
                                <span className="font-semibold text-[#CC00F4]">ux&nbsp;</span>
                            </ImgReveal>
                            and blazingly&nbsp;
                            <ImgReveal src={running.src}>
                                <span className="italic text-red-500">
                                    fast&nbsp;
                                </span>
                            </ImgReveal>
                            websites
                        </h2>
                    </div>
                </section>
                <section className="hidden sm:flex col-start-2 2xl:col-start-3 col-span-1 h-full items-center justify-center">
                    <div className="min-h-[350px] max-h-[500px] 2xl:max-h-[800px] h-full">
                        <Robot />
                    </div>
                </section>
            </div>
            <HomeContent />
        </main>
    )
}