import Card from './Card'

export default function WhyKwoc(){
    return(
      <>
        <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl">WHY KWoC</h1>
        <p className="text-zinc-300 text-center mb-4 text-lg font-normal lg:text-2xl px-10 sm:px-16 xl:px-96 xl:pb-32 mt-10">Kharagpur Winter of Code is a 5-week long online program for students who are new to open source software development. The program not only helps students to get involved in open source, but also prepares them for many open source summer programs; Google Summer of Code being one of them.</p>
        <div className='flex items-stretch flex-wrap px-8'>
            <Card header="Intro to Open Source" content="KWoC provides a great opportunity to get acquainted with Github along with Git commands and contribute to open source efficiently. Brush up your coding skills" secondary="If you love coding and want to learn about software development then KWoC helps you to get a glimpse of it and gives you a head start."/>

            <Card header="Prepare for GSoC" content="With KWoC, you get to know about how to select a project, interact with mentors and learn all other things that prepare you in the best way for the next GSoC."/>
            
            <Card header="Exciting goodies" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
        </div>
      </>
    )
  }