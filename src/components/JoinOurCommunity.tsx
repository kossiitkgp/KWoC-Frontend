import DiscordLogo from "../assets/discord_logo.png";
import SlackLogo from "../assets/slack_logo.png";

export default function JoinOurCommunity() {
    return (
        <>
            <h1 className="text-zinc-300 text-center mb-4 mx-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl">
                Join Our Community
            </h1>

            <div className="flex flex-col lg:flex-row p-4 justify-center items-center">
                <div className="flex flex-col w-full md:w-4/6 lg:w-2/5 justify-center items-center m-4 p-4 py-8 gap-6 bg-black/50 backdrop-blur-lg border border-[#FFFFFF]/[0.16] rounded-lg shadow-sm">
                    <div className="flex items-center text-center gap-2">
                        <img
                            src={SlackLogo}
                            height={100}
                            width={100}
                        />
                        <span className="text-white font-bold text-2xl">
                            Slack Workspace
                        </span>
                    </div>
                    <a
                        className="text-white px-4 py-2 border border-white rounded hover:bg-white/25 hover:transition cursor-pointer"
                        href="https://join.slack.com/t/kwoc-koss/shared_invite/zt-wlftnk75-VoQHEEB9WpkHfza6~GGpWQ"
                        target="_blank">
                        Join Now
                    </a>
                </div>
                <div className="flex flex-col w-full md:w-4/6 lg:w-2/5 justify-center items-center m-4 p-4 py-8 gap-6 bg-black/50 backdrop-blur-lg border border-[#FFFFFF]/[0.16] rounded-lg shadow-sm">
                    <div className="flex items-center text-center gap-3">
                        <img
                            src={DiscordLogo}
                            height={100}
                            width={100}
                        />
                        <span className="text-white font-bold text-2xl">
                            Discord Server
                        </span>
                    </div>
                    <a
                        className="text-white px-4 py-2 border border-white rounded hover:bg-white/25 hover:transition cursor-pointer"
                        href="https://discord.gg/efFwh6fnjk"
                        target="_blank">
                        Join Now
                    </a>
                </div>
            </div>
        </>
    );
}
