import Card from "./Card";

export default function WhyKWoC() {
  return (
    <>
      <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl">
        WHY KWoC ?
      </h1>
      <div className="flex flex-col lg:flex-row items-stretch px-8 m-auto mt-10 w-[90%]">
        <Card
          header="Intro to Open Source"
          content="KWoC provides a great opportunity to get acquainted with Github along with Git commands and contribute to open source efficiently. Brush up your coding skills"
        />

        <Card
          header="Prepare for GSoC"
          content="With KWoC, you get to know about how to select a project, interact with mentors and learn all other things that prepare you in the best way for the next GSoC."
        />

        <Card
          header="Exciting goodies"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
      </div>
    </>
  );
}
