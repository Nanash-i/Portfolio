/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, } from '@react-three/drei';
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import CanvasLoader from '../components/CanvasLoader.jsx';
import  {HackerRoom} from '../components/HackerRoom.jsx';
import { calculateSizes} from '../constants/index.js';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Buttons from '../components/Buttons.jsx';

const Hero = () => {


 const isSmall=useMediaQuery({maxWidth:440});
 const isMobile=useMediaQuery({maxWidth:768})
 const isTablet=useMediaQuery({minWidth:768,maxWidth:1024})

const sizes=calculateSizes(isSmall,isMobile,isTablet)


  return (
    <section className="min-h-screen w-full flex flex-col relative" id='home'>
        <div className="w-full flex flex-col mx-auto sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi,I am Praveen <span className="waving-hand">👋</span> </p>
            <p className="text-gray_gradient hero_tag ">Exploring Tech Wonders</p>
        </div>

        <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0,0,20]}/>
            <HeroCamera isMobile={isMobile} >
            <HackerRoom scale={sizes.deskScale}
                        position={sizes.deskPosition}
                        rotation={[0,-Math.PI,0]} />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <directionalLight position={[10,10,10]} intensity={0.5}/>
            <ambientLight intensity={1} />
            </Suspense>
          </Canvas>


        </div>

        <div className='absolute bottom-7 left-0 right-0 c-space z-10 w-full'>
        <a href="#About" className='w-fit'>
              <Buttons name="Lets get connected" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
        </div>
    </section>
  )
}

export default Hero