import DiscordLogo from "../assets/discord_logo.svg";
import SlackLogo from "../assets/slack_logo.svg";
import { DISCORD_INVITE, SLACK_INVITE } from "../util/constants";

export default function JoinOurCommunity() {
  return (
    <>
      <h1 className=" font-display text-zinc-300 text-center mb-4 mx-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl">
        Join Our Community
      </h1>

      <div className="flex flex-col lg:flex-row p-4 justify-center items-center">
        <div className="flex flex-col w-3/4 md:w-1/2 lg:w-[28%] justify-center items-center m-4 bg-black/50 border border-[#FFFFFF]/[0.16] rounded-lg shadow-sm hover:transition hover:duration-200 hover:bg-white/25">
          <a
            className="w-full flex justify-center p-5"
            href={SLACK_INVITE}
            target="_blank"
          >
            <div className="flex items-center text-center gap-2">
              <img src={SlackLogo} width={60} />
              <span className="text-white font-bold text-xl">
                Slack Workspace
              </span>
            </div>
          </a>
        </div>

        <div className="flex flex-col w-3/4 md:w-1/2 lg:w-[28%] justify-center items-center m-4 bg-black/50 border border-[#FFFFFF]/[0.16] rounded-lg shadow-sm hover:transition hover:duration-200 hover:bg-white/25">
          <a
            className="w-full flex justify-center p-5"
            href={DISCORD_INVITE}
            target="_blank"
          >
            <div className="flex items-center text-center gap-3">
              <img src={DiscordLogo} width={60} />
              <span className="text-white font-bold text-xl">
                Discord Server
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
