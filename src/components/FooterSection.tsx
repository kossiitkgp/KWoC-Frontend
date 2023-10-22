export default function FooterSection() {
  return (
    <div className="backdrop-blur-sm bg-black/40 py-16 mx-10 rounded-md">
      <nav className="flex flex-row flex w-full justify-center justify-items-center py-16 ">
        <div className="w-1/5 text-center text-zinc-300 mb-4 text-1xl font-extrabold">
          {/* TODO: add all the links here, more if needed */}
          <h3 className="text-2xl mb-3">Social Groups</h3>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/showcase/kharagpur-winter-of-code/posts/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/kossiitkgp"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="w-1/5 text-center text-zinc-300 mb-4 text-1xl font-extrabold">
          <h3 className="text-2xl mb-3">Quick Links</h3>
          <ul>
            <li>
              <a href="/#tline">Timeline</a>
            </li>
            <li>
              <a href="/FAQ">FAQ</a>
            </li>
            <li>
              <a href="/#about">About KWoC</a>
            </li>
          </ul>
        </div>

        <div className="w-1/5 text-center text-zinc-300 mb-4 text-1xl font-extrabold">
          <h3 className="text-2xl mb-3">Other</h3>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://kossiitkgp.org"
              >
                About KOSS
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="text-center text-zinc-300 mb-4 text-4xl font-extrabold leading-none tracking-tight mt-12">
        <h1>Kharagpur Winter of Code</h1>
        <h2>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://kossiitkgp.org"
          >
            With &#10084; by KOSS
          </a>
        </h2>
      </div>
    </div>
  );
}