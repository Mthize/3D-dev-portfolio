import Card  from '../components/Card'
import { useRef } from 'react'
import { Globe } from '../components/Global'
import CopyEmailButton  from '../components/CopyEmailButton'
import { FrameWork } from '../components/FrameWork'

const About = () => {
  const gridContainer = useRef();
  return (
    <section className="c-space section-spacing">
       <h2 className="text-heading ">
        About Me
      </h2>
      <div 
        className="grid grid-cols-1 gap-4 md:grid-cols-6 
        md:auto-rows-[18rem] mt-12"
      >
        { /* Grid 1 */ }
        <div className="flex items-end grid-default-color grid-1">
          <img src="/assets/coding-pov.png" 
            className="absolute scale-[1.75] -right-[5rem] 
            -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi I'm Thapelo Mthize</p>
            <p className="subtext">
              Security-focused Full-Stack Engineer with 4+ years of experience building 
              high-performance, AI-accelerated software application, 
              specializing in React, Node.js, and TypeScript
            </p>
          </div>
          <div 
            className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2
            sm:h-1/3 bg-gradient-to-t from-indigo"
          />
        </div>
        { /* Grid 2 */ }
        <div className="grid-default-color grid-2">
          <div 
            ref={gridContainer}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              Creative Craft
            </p>
            <Card 
              style={{rotate: "75deg", top: "30%", left: "20%"}} 
              text="AI Driven"
              containerRef={gridContainer}
            />
            <Card 
              style={{rotate: "-30deg", top: "60%", left: "45%"}} 
              text="Secured by Design" 
              containerRef={gridContainer}
            />
            <Card 
              style={{rotate: "90deg", bottom: "30%", left: "70%"}} 
              text="Network" 
              containerRef={gridContainer}
            />
            <Card 
              style={{rotate: "-45deg", top: "55%", left: "0%"}} 
              text="GRASP" 
              containerRef={gridContainer}
            />
            <Card 
              style={{rotate: "20deg", top: "10%", left: "38%"}} 
              text="Web Services"
              containerRef={gridContainer}
            />
            <Card 
              style={{rotate: "30deg", top: "70%", left: "70%"}} 
              image="assets/logos/csharp-pink.png"
              containerRef={gridContainer}
            />
            <Card 
              style={{rotate: "-45deg", top: "70%", left: "25%"}} 
              image="assets/logos/dotnet-pink.png" 
              containerRef={gridContainer}
            />
            <Card 
              style={{rotate: "-45deg", top: "5%", left: "10%"}} 
              image="assets/logos/blazor-pink.png" 
              containerRef={gridContainer}
            />
          </div>
        </div>
        { /* Grid 3 */ }
        <div className="grid-black-color grid-3">
         <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I'm based in Johannesburg, South Africa, and open to remote work.</p>
         </div>
          <figure className="absolute left-[30%] top-[30%]">
            <Globe />
          </figure>
        </div>
        { /* Grid 4 */ }
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Let’s create something meaningful together
            </p>
            <CopyEmailButton />
          </div> 
        </div>
        { /* Grid 5 */ }
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in multiple languages, frameworks, and 
              AI tools to build reliable and scalable applications.
              I enjoy crafting efficient solutions that solve real problems.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-fullstart-[50%] md:scale-125">
            <FrameWork />
          </div> 
        </div>
      </div>
    </section>
  )
}

export default About
