import Robot from "./Comps/3d";
import Hero from "./Comps/hero";
import MobileNav from "./Comps/mobilenav";
import Nav from "./Comps/navigation";

export default function Home() {
  return (
    <>
      <MobileNav />
      <Nav />
      <Hero />
      
    </>
  )
}