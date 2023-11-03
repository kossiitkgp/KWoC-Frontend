import Card from "./Card";

export default function WhyKWoC() {
  return (
    <>
      <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl">
        WHY KWoC ?
      </h1>
      <div className="flex flex-col lg:flex-row items-stretch px-8 m-auto mt-10 w-[90%]">
        <Card
          header={
            <span>
              Intro to
              <br />
              Open Source
            </span>
          }
          content="Get started with open source collaboration. Hone programmer skills with Git and GitHub. Make meaningful contributions guided by mentors. Build a portfolio showcasing your talents."
        />

        <Card
          header={
            <span>
              Prepare for
              <br />
              GSoC
            </span>
          }
          content="Research organizations and connect with mentors. Create quality proposals and sharpen skills. Gain insider tips to boost your GSoC chances. Open doors through impressive abilities."
        />

        <Card
          header={
            <span>
              Win Exciting
              <br />
              Goodies
            </span>
          }
          content={
            <span>
              Top performers in KWoC also have the opportunity to win fantastic
              prizes and rewards from{" "}
              <a
                className="text-blue-500 font-semibold hover:text-blue-600"
                href="https://fossunited.org"
                target="_blank"
              >
                FOSS United
              </a>
              , making their participation even more rewarding.
            </span>
          }
        />
      </div>
    </>
  );
}
