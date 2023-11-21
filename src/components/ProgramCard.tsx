interface Program {
  year: number;
  participants: number;
  prs: number;
  link: string;
  projects?: number;
  locs?: number;
}

function ProgramCard({
  year,
  participants,
  prs,
  projects,
  locs,
  link,
}: Program) {
  return (
    <div className="p-8 rounded-md bg-[#2a2a2aa3] col-span-1">
      <h3 className="font-semibold text-5xl text-center text-white">{year}</h3>
      <div className="flex gap-8 mt-8 justify-center">
        <div >
          <p className="font-bold text-primary">Participants</p>
          <h6 className="text-2xl font-bold text-white">{participants}+</h6>
        </div>
        <div>
          <p className="font-bold text-primary">PR's</p>
          <h6 className="text-2xl font-bold text-white">{prs}+</h6>
        </div>
        {projects ? (
          <div>
            <p className="font-bold text-primary">Projects</p>
            <h6 className="text-2xl font-bold text-white">{projects}+</h6>
          </div>
        ) : (
          <div>
            <p className="font-bold text-primary">Lines of Code</p>
            <h6 className="text-2xl font-bold text-white">{locs}M+</h6>
          </div>
        )}
      </div>

      <a
        className="flex font-bold justify-center bg-primary text-white mt-8 mx-auto p-2 md:w-9/12 rounded-md text-xl"
        href={link}
        target="_blank"
      >
        View
      </a>
    </div>
  );
}

export default ProgramCard;
