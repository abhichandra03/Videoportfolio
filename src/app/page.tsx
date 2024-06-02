import HomePage from "@/Components/HomePage";
import About from "@/Components/About";
import Work from "@/Components/Work";
import Navbar from "@/Components/Navbar";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#153448]  text-[#DFD0B8] min-h-screen items-center justify-between poppins overflow-x-hidden scrollbar-hide">
      {/* <div className=" h-screen  overflow-x-hidden scrollbar-hide"> */}
          <Navbar/>
          <HomePage/>
          <About/>
          <Skills/>
          <Work/>
          <Contact/>
        {/* </div> */}
    </main>
  );
}
