interface Pulls {
  year: number;
  participants: number;
  prs: number;
  archive_link: string;
  projects?: number;
  lines_of_code?: number;
}

function ProgramCard({
  year,
  participants,
  prs,
  projects,
  lines_of_code,
  link,
}: Pulls) {
  return (
    <div className="px-4 py-8 md:py-8 md:px-8 rounded-md bg-[#2a2a2aa3] col-span-1">
      <h3 className="font-semibold text-5xl text-center text-white">{year}</h3>
      <div className="flex gap-6 md:gap-8 mt-8 justify-center">
        <div>
          <p className="font-bold text-blue-300">Participants</p>
          <h6 className="text-2xl font-bold text-white">{participants}+</h6>
        </div>
        <div>
          <p className="font-bold text-blue-300">PR's</p>
          <h6 className="text-2xl font-bold text-white">{prs}+</h6>
        </div>
        {projects ? (
          <div>
            <p className="font-bold text-blue-300">Projects</p>
            <h6 className="text-2xl font-bold text-white">{projects}+</h6>
          </div>
        ) : (
          <div>
            <p className="font-bold text-blue-300">Lines of Code</p>
            <h6 className="text-2xl font-bold text-white">{lines_of_code}M+</h6>
          </div>
        )}
      </div>

      <a
        className="flex font-bold justify-center bg-primary text-white mt-8 mx-auto p-2 md:w-9/12 rounded-md text-xl hover:bg-primary-800"
        href={link}
        target="_blank"
      >
        View Archive
      </a>
    </div>
  );
}

export default ProgramCard;
