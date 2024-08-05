import Spline from '@splinetool/react-spline/next';

export default function Robot() {
  return (
    <main className='h-full min-h-[350px] max-h-[500px] 2xl:min-h-[500px] 2xl:max-h-[800px] w-auto bg-transparent'>
      <Spline
        scene="https://prod.spline.design/9CBD8E0TC8nZ9WC1/scene.splinecode"
      />
    </main>
  );
}