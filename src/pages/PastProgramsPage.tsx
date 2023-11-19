import ProgramCard from "../components/ProgramCard";

export default function PastProgramsPage() {
  return (
    <div className="flex flex-col items-center pt-28">
      <h1 className=" font-display text-5xl md:text-7xl font-bold text-center">
        Our Past Programs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 my-14">
        <ProgramCard year={2022} locs={0.5} participants={1200} prs={390} link="https://kwoc22.kossiitkgp.org"/>
        <ProgramCard year={2021} participants={1200} locs={5.2} prs={750} link="https://kwoc21.kossiitkgp.org"/>
        <ProgramCard year={2020} participants={2000} projects={150} prs={600} link="https://kwoc20.kossiitkgp.org"/>
        <ProgramCard year={2019} locs={3} participants={2000} prs={600} link="https://kwoc19.kossiitkgp.org"/>
      </div>
    </div>
  );
}
