import DiscordLogo from "../assets/discord_logo.png";
import SlackLogo from "../assets/slack_logo.png";

export default function JoinOurCommunity() {
    return (
        <>
            <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl">
                Join Us
            </h1>
            <p className="text-zinc-300 text-center text-lg font-normal lg:text-2xl px-10 sm:px-16 xl:px-96 mt-10">
                Community Description
            </p>

            <div className="flex flex-col md:flex-row p-4 justify-center items-center">
                <div className="flex flex-col w-5/6 md:w-1/2 lg:w-1/3 justify-center items-center m-4 p-8 gap-6 bg-white/10 rounded-lg shadow-sm">
                    <img
                        src={SlackLogo}
                        height={100}
                        width={250}
                    />

                    <a
                        className="text-white px-4 py-2 border border-white rounded hover:bg-white/25 hover:transition cursor-pointer"
                        href="https://join.slack.com/t/kwoc-koss/shared_invite/zt-wlftnk75-VoQHEEB9WpkHfza6~GGpWQ"
                        target="_blank">
                        Join Now
                    </a>
                </div>
                <div className="flex flex-col w-5/6 md:w-1/2 lg:w-1/3 justify-center items-center m-4 p-8 gap-6 bg-white/10 rounded-lg shadow-sm">
                    <img
                        src={DiscordLogo}
                        height={100}
                        width={250}
                    />
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
