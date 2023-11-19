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
      <h3 className="font-semibold text-3xl text-center">{year}</h3>
      <div className="flex gap-8 mt-8 justify-center">
        <div >
          <p className="font-bold">Participants</p>
          <h6 className="text-2xl font-bold ">{participants}+</h6>
        </div>
        <div>
          <p className="font-bold">PR's</p>
          <h6 className="text-2xl font-bold ">{prs}+</h6>
        </div>
        {projects ? (
          <div>
            <p className="font-bold">Projects</p>
            <h6 className="text-2xl font-bold ">{projects}+</h6>
          </div>
        ) : (
          <div>
            <p className="font-bold">Lines of Code</p>
            <h6 className="text-2xl font-bold ">{locs}M+</h6>
          </div>
        )}
      </div>

      <a
        className="flex justify-center bg-[#ffffff] text-black mt-8 mx-auto p-2 md:w-9/12 rounded-md text-xl"
        href={link}
        target="_blank"
      >
        View
      </a>
    </div>
  );
}

export default ProgramCard;
