import Hero from "../components/Hero";
import Grid from "../components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col over mx-auto sm:px-10 px-5">   
      <div className="max-w-7xl w-full h-screen">
      {/* <FloatingNav navItems={
          [
            { name: "Home", link: "/" },
            { name: "About Me", link: "/aboutme" },
            { name: "Projects", link: "/projects" },
          ]
        } /> */}
        <ShootingStars />
        <StarsBackground />
        < Hero />
        < Grid />
      </div>
    </main>
  );
}
