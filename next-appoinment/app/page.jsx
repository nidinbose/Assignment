import Image from "next/image";
import Landing from "./HomeComponents/Landing";
import AboutSection from "./HomeComponents/about";
import WellnessServices from "./HomeComponents/Services";
import WhyChooseUs from "./HomeComponents/Why";
import RecentBlogs from "./HomeComponents/News";
import ContactPage from "./HomeComponents/Contact";

export default function Home() {
  return (
    <div className="">
       <Landing/>
       <AboutSection/>
       <WellnessServices/>
       <WhyChooseUs/>
       <RecentBlogs/>
       <ContactPage/>
    </div>
  );
}
