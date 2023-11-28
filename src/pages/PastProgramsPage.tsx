import FooterSection from "../components/FooterSection";
import ProgramCard from "../components/ProgramCard";
import PROGRAMS from "../data/programs.json";

export default function PastProgramsPage() {
  return (
    <>
      <div className="flex flex-col items-center pt-28">
        <h1 className=" font-display text-5xl md:text-7xl font-bold text-center">
          Past Editions of KWoC
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 my-14">
          {PROGRAMS.map((program) =>
            program.projects ? (
              <ProgramCard
                year={program.year}
                participants={program.participants}
                projects={program.projects}
                prs={program.prs}
                archive_link={program.link}
                key={program.link}
              />
            ) : (
              <ProgramCard
                year={program.year}
                participants={program.participants}
                lines_of_code={program.locs}
                prs={program.prs}
                archive_link={program.link}
                key={program.link}
              />
            ),
          )}
        </div>
      </div>
      <FooterSection />
    </>
  );
}
