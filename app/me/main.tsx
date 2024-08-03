import allAb from '@/assets/allAbMe.gif';
import ImgReveal from '../Comps/gif_revel';
import meme from '@/assets/meme.jpg';
export default function Main() {
    return (
        <>
            <section className='flex items-center justify-center mt-24 flex-col'>
                <ImgReveal src={allAb.src}>
                    <span className='text-2xl md:text-4xl font-bold text-blue-500'>
                        About me
                    </span>
                </ImgReveal>
                <div className='max-w-[900px] mt-10 m-4 text-center text-lg'>
                    <h1>
                        I'm a Sweden-based full-stack developer with a huge passion for coding and developing new technologies.
                        My journey into the world of software development began at an early age, and over the years, I have honed
                        my skills in various programming languages and frameworks. From creating simple websites to developing
                        complex web applications, I thrive on the challenges that each project brings. My dedication to continuous
                        learning and improvement is driven by my desire to impress my boss and make a meaningful impact in the tech industry.
                    </h1>
                    <h1>
                        <br />
                        Currently, I am on my way to beginning my second year of high school. Balancing my academic responsibilities
                        with my enthusiasm for coding has been both challenging and rewarding. High school provides a great opportunity
                        for me to further my education while simultaneously working on exciting development projects. I am committed
                        to pushing the boundaries of what I can achieve as a young developer and look forward to the many opportunities
                        that lie ahead in my educational and professional journey.
                    </h1>

                </div>
            </section>
            <div className='flex items-center justify-center mt-24'>
                <ImgReveal src={meme.src}>
                    <span className='text-2xl font-bold md:text-4xl text-yellow-200'>My story</span>
                </ImgReveal>
            </div>
            <section className="relative min-h-screen flex flex-col justify-center  overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                        <div className="w-full max-w-3xl mx-auto">
                            {/* Vertical Timeline #2 */}
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                {/* Item #1 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    {/* Icon */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={10}
                                        >
                                            <path
                                                fillRule="nonzero"
                                                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                                            />
                                        </svg>
                                    </div>
                                    {/* Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">2021</div>
                                        </div>
                                        <div className="text-slate-500">

                                            I received my first introduction to coding in the 6th grade, and I immediately fell in love with it. This early exposure sparked a passion for programming that has continued to grow ever since. ❤️🥰
                                        </div>
                                    </div>
                                </div>
                                {/* Item #2 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    {/* Icon */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={10}
                                        >
                                            <path
                                                fillRule="nonzero"
                                                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                                            />
                                        </svg>
                                    </div>
                                    {/* Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">2022</div>
                                        </div>
                                        <div className="text-slate-500">
                                            I began learning how to code and focused on gaining as much knowledge as possible about HTML and CSS. This foundational understanding of web development has been crucial in building my skills and confidence in creating and designing web pages.
                                        </div>
                                    </div>
                                </div>
                                {/* Item #3 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    {/* Icon */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={10}
                                        >
                                            <path
                                                fillRule="nonzero"
                                                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                                            />
                                        </svg>
                                    </div>
                                    {/* Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">2023</div>
                                        </div>
                                        <div className="text-slate-500">
                                            After taking a one-year break from my coding journey, I fell in love with programming again, but this time much more intensely. I started coding daily and began learning React, dedicating myself to improving my skills. By the end of the year, I had become really proficient at coding, achieving a level of expertise that I am very proud of.
                                        </div>
                                    </div>
                                </div>
                                {/* Item #4 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    {/* Icon */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={10}
                                        >
                                            <path
                                                fillRule="nonzero"
                                                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                                            />
                                        </svg>
                                    </div>
                                    {/* Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">2024</div>
                                        </div>
                                        <div className="text-slate-500">
                                            I got my first full-time job in the tech industry at the age of 16, securing a position as a full-stack developer. This opportunity allowed me to dive into both front-end and back-end development, and I quickly gained a wealth of experience. I am proud to say that I am still working in this role to this day, continuously learning and growing within the company.
                                        </div>
                                    </div>
                                </div>
                                {/* Item #5 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    {/* Icon */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                        >
                                            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                                        </svg>
                                    </div>
                                    {/* Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">Future</div>
                                        </div>
                                        <div className="text-slate-500">
                                            Hoping to learn new things every day and improve my knowledge
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End: Vertical Timeline #2 */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}