import DiscordLogo from "../assets/discord_logo.png";
import SlackLogo from "../assets/slack_logo.png";

export default function JoinOurCommunity() {
    return (
        <>
            <h1 className="text-zinc-300 text-center mb-4 mx-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl">
                Join Our Community
            </h1>

            <div className="flex flex-col lg:flex-row p-4 justify-center items-center">
                <div className="flex flex-col w-3/4 md:w-1/2 lg:w-[28%] justify-center items-center m-4 bg-black/50 backdrop-blur-lg border border-[#FFFFFF]/[0.16] rounded-lg shadow-sm hover:transition hover:duration-200 hover:bg-[#36c5f0]/10 hover:border-white/5">
                    <a
                        className="w-full flex justify-center p-6"
                        href="https://join.slack.com/t/kwoc-koss/shared_invite/zt-wlftnk75-VoQHEEB9WpkHfza6~GGpWQ"
                        target="_blank">
                        <div className="flex items-center text-center gap-2">
                            <img
                                src={SlackLogo}
                                height={100}
                                width={80}
                            />
                            <span className="text-white font-bold text-xl">
                                Slack Workspace
                            </span>
                        </div>
                    </a>
                </div>

                <div className="flex flex-col w-3/4 md:w-1/2 lg:w-[28%] justify-center items-center m-4 bg-black/50 backdrop-blur-lg border border-[#FFFFFF]/[0.16] rounded-lg shadow-sm hover:transition hover:duration-200 hover:bg-[#5865f2]/10 hover:border-white/5">
                    <a
                        className="w-full flex justify-center p-6"
                        href="https://discord.gg/efFwh6fnjk"
                        target="_blank">
                        <div className="flex items-center text-center gap-3">
                            <img
                                src={DiscordLogo}
                                height={100}
                                width={80}
                            />
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
