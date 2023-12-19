import React from "react";
import FooterSection from "../components/FooterSection";
import ProgramCard from "../components/ProgramCard"; // Assuming ProgramCard interface or type exists
import PROGRAMS from "../data/programs.json"; // Assuming data structure matches usage

interface ProgramDetails {
  year: number;
  participants: number;
  prs: number;
  link: string;
  projects?: any[]; // Replace 'any[]' with appropriate type/interface if available
  locs?: number; // Add appropriate types/interfaces for other properties if available
}

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
                pull_count={program.prs}
                archive_link={program.link}
                key={program.link}
              />
            ) : (
              <ProgramCard
                year={program.year}
                participants={program.participants}
                lines_of_code={program.locs}
                pull_count={program.prs}
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
