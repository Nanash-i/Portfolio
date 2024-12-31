import Globe from "react-globe.gl";
import Buttons from '../components/Buttons.jsx'
import { useState } from "react";
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' work.praveenkumardas7@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 5000);
  };



  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div className="flex justify-center ">
                        <p className="grid-headtext ">Hi,I am Praveen</p>
                    </div>
                </div>
            </div>
            
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div className="flex justify-center">
                        <p className="grid-headtext">Tech Stack</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full flex justify-center items-center sm:h-[326px] h-fit">
                       <Globe 
                         height={326}
                         width={326}
                         backgroundColor="rgba(0,0,0,0)"
                         backgroundImageOpacity={0.05}
                         showAtmosphere
                         globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                         bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                         animateIn
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">I work remotely across most timeones</p>
                        <p className="grid-subtext">I am based from India,with Remote work Available </p>
                        <Buttons name="Contact me" isBeam containerClass="w-full mt-10"/>
                    </div>
                </div>
            </div> 
            
            <div className="xl:col-span-2 xl:row-span-3">
              <div className="grid-container">
                <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

               <div>
                <p className="grid-headtext">My Passion for Coding</p>
                <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                </p>
               </div>
            </div>
            </div>
    
            <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p   className="lg:text-xl md:text-xl font-medium text-gray-200 text-center break-all"
          style={{ maxWidth: "90%" }}>work.praveenkumardas7@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
            
        </div>     

    </section>
  )
}

export default About