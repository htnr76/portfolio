import Spline from '@splinetool/react-spline/next';

export default function Robot() {
    return (
        <main className='h-full min-h-[350px] max-h-[500px] w-auto bg-inherit'>
            <Spline
                scene="https://prod.spline.design/9npGEjWVzU9b8nTh/scene.splinecode"
            />
        </main>
    );
}