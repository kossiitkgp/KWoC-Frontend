export default function FooterSection() {
  return (
    <div className="py-16 mx-3 sm:mx-10 rounded-md">
      <nav className="flex w-full justify-center justify-items-center py-16 md:flex-row md:items-stretch flex flex-col justify-center items-center">
        <div className="w-1/5 text-center text-zinc-300 mb-4 text-base font-extrabold">
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

        <div className="w-1/5 text-center text-zinc-300 mb-4 text-base font-extrabold">
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

        <div className="w-1/5 text-center text-zinc-300 mb-4 text-base font-extrabold">
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

      <div>
        <h1 className="text-center text-zinc-300 mb-4 text-2xl sm:text-4xl font-extrabold leading-none tracking-tight mt-12">Kharagpur Winter of Code</h1>
        <h2 className="text-center text-zinc-300 mb-4 text-xl font-extrabold leading-none tracking-tight mt-4">
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