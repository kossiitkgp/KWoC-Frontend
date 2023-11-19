import { Link } from "react-router-dom";
import { ROUTER_PATHS } from "../util/constants";

export default function PastPrograms() {
  return (
    <>
      <h1 className=" font-display text-zinc-300 text-center mb-4 mx-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl">
        Our Past Programs
      </h1>
      <p className="text-zinc-300 text-center mb-6 text-lg font-normal lg:text-2xl px-10 sm:px-16 xl:px-96 mt-10">
        Dive into our coding journey—explore past programs that showcase our
        dedication, innovation, and coding excellence.
      </p>
      <Link to={ROUTER_PATHS.PASTPROGRAMS} rel="noopener noreferrer" className="flex w-fit mx-auto">
        <div className="text-xl m-auto px-12 py-5 bg-black/50 border border-[#FFFFFF]/[0.16] rounded-lg shadow-sm hover:transition hover:duration-200 hover:bg-white/25">
          <p className="text-white text-center font-bold">Explore</p>
        </div>
      </Link>
    </>
  );
}
