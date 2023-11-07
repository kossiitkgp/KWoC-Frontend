import { DISCORD_INVITE, KOSS_LINKEDIN_URL, KOSS_TWITTER_URL, KOSS_WEBSITE_URL, ROUTER_PATHS, SLACK_INVITE } from "../util/constants";

export default function FooterSection() {
  return (
    <div className="py-16 mx-1 sm:mx-10 rounded-md">
      <nav className="w-full justify-items-center py-16 md:flex-row md:items-stretch flex flex-col justify-center items-center">
        <div className="w-1/2 sm:w-1/5 text-center text-zinc-300 mb-4 text-base font-extrabold">
          {/* TODO: add all the links here, more if needed */}
          <h3 className="text-2xl mb-3">Social Groups</h3>
          <ul>
            <li className="hover:text-white/50">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={DISCORD_INVITE}
              >
                Discord
              </a>
            </li>
            <li className="hover:text-white/50">
              <a target="_blank" rel="noreferrer noopener" href={SLACK_INVITE}>
                Slack
              </a>
            </li>
            <li className="hover:text-white/50">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={KOSS_LINKEDIN_URL}
              >
                LinkedIn
              </a>
            </li>
            <li className="hover:text-white/50">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={KOSS_TWITTER_URL}
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-1/5 text-center text-zinc-300 mb-4 text-base font-extrabold">
          <h3 className="text-2xl mb-3">Quick Links</h3>
          <ul>
            <li className="hover:text-white/50">
              <a href={`${ROUTER_PATHS.HOME}#timeline`}>Timeline</a>
            </li>
            <li className="hover:text-white/50">
              <a href={ROUTER_PATHS.FAQ}>FAQ</a>
            </li>
            <li className="hover:text-white/50">
              <a href={`${ROUTER_PATHS.HOME}#about`}>About KWoC</a>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-1/5 text-center text-zinc-300 mb-4 text-base font-extrabold">
          <h3 className="text-2xl mb-3">Other</h3>
          <ul>
            <li className="hover:text-white/50">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={KOSS_WEBSITE_URL}
              >
                About KOSS
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <h1 className="text-center text-zinc-300 mb-4 text-2xl sm:text-4xl font-extrabold leading-none tracking-tight mt-12">
          Kharagpur Winter of Code
        </h1>
        <h2 className="text-center text-zinc-300 mb-4 text-xl font-extrabold leading-none tracking-tight mt-4">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={KOSS_WEBSITE_URL}
          >
            With &#10084; by KOSS
          </a>
        </h2>
      </div>
    </div>
  );
}
