import Hero from "@/components/main/Hero";
import {CanvasReveal} from "@/components/sub/CanvasReveal";
import Footer from "@/components/sub/Footer";
import Typewrite from "@/components/sub/Typewrite";
import Connect from "@/components/sub/Connect";
import { WorldMapDemo } from "@/components/sub/WorldMapDemo";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <CanvasReveal />
        <Connect />
        <WorldMapDemo />
        <Typewrite />        
        <Footer />
      </div>
    </main>
  );
}
