import Image from "next/image";
import Landing from "./HomeComponents/Landing";
import AboutSection from "./HomeComponents/about";

export default function Home() {
  return (
    <div className="">
       <Landing/>
       <AboutSection/>
    </div>
  );
}
