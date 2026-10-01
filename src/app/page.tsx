import Image from "next/image";
import Navbar from "./components/Navbar";
import ChipScroll from "./components/ChipScroll";
import AxionBanner from "./components/sections/AxionBanner";
import AboutVertex from "./components/sections/AboutVertex";
import Domains from "./components/sections/Domains";
import Journey from "./components/journey";
import UpcomingEvents from './components/sections/UpcomingEvents'
import About from "./components/sections/About";
import Clubs from './components/sections/Clubs'
import Members from './components/sections/Members';
import  Contact from './components/sections/Contact'
import HashScroll from './components/HashScroll'

// Every landing section gets an id here so it can be shared as a direct link,
// e.g. https://<site>/#members. scroll-mt-16 keeps the section top clear of
// the fixed 4rem navbar when the link opens.
export default function Home() {
  return (
    <div>
   <Navbar/>
   <HashScroll/>
   <ChipScroll/>
   <div id="axion" className="scroll-mt-16"><AxionBanner/></div>
   <div id="about" className="scroll-mt-16"><AboutVertex/></div>
   <div id="domains" className="scroll-mt-16"><Domains/></div>
   <div id="journey" className="scroll-mt-16"><Journey/></div>
   <div id="members" className="scroll-mt-16"><Members/></div>
   <div id="contact" className="scroll-mt-16"><Contact/></div>
  
    </div>
  );
}
