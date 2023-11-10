import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projectList = [
    {
      name: "Project A",
      mentor: "Mentor A",
      repoLink: "https://github.com/projectA",
      slackChannelLink: "https://slack.com/projectA",
      tags: ["OCaml", "Perl", "LLVM", "Quantum Mechanics"],
      description:
        "A groundbreaking project exploring the intersection of OCaml and Quantum Mechanics for innovative solutions.",
    },
    {
      name: "Project B",
      mentor: "Mentor B",
      repoLink: "https://github.com/projectB",
      slackChannelLink: "https://slack.com/projectB",
      tags: ["CMake", "Shell", "HTML+ERB", "Artificial Intelligence"],
      description:
        "An AI-powered project with a robust build system using CMake and Shell scripting for seamless development. Join us in shaping the future of artificial intelligence!",
    },
    {
      name: "Project C",
      mentor: "Mentor C",
      repoLink: "https://github.com/projectC",
      slackChannelLink: "https://slack.com/projectC",
      tags: ["Matlab", "Julia", "Pascal", "TeX"],
      description:
        "A versatile project leveraging Matlab and Julia for scientific computing, with Pascal and TeX for documentation. Dive into the world of computational science!",
    },
    {
      name: "Project D",
      mentor: "Mentor D",
      repoLink: "https://github.com/projectD",
      slackChannelLink: "https://slack.com/projectD",
      tags: ["Rust", "HTTP", "Blockchain", "C#"],
      description:
        "An ambitious project exploring the Rust language, HTTP protocols, and Blockchain technology with C# integration. Revolutionize the way we build and secure applications!",
    },
    {
      name: "Project E",
      mentor: "Mentor E",
      repoLink: "https://github.com/projectE",
      slackChannelLink: "https://slack.com/projectE",
      tags: ["Kotlin", "Ada", "HTML+Django", "SQL"],
      description:
        "A web development endeavor combining the power of Kotlin and Ada, utilizing HTML+Django for frontend and SQL for database management. Craft interactive and data-driven web experiences!",
    },
    {
      name: "Project F",
      mentor: "Mentor F",
      repoLink: "https://github.com/projectF",
      slackChannelLink: "https://slack.com/projectF",
      tags: ["XML", "Deep Learning", "Assembly", "Nginx"],
      description:
        "A cutting-edge project incorporating XML data formats, deep learning algorithms, low-level Assembly programming, and Nginx for web server configuration. Unleash the power of data and intelligence!",
    },
    {
      name: "Project G",
      mentor: "Mentor G",
      repoLink: "https://github.com/projectG",
      slackChannelLink: "https://slack.com/projectG",
      tags: ["Arduino", "Dev Ops", "C++", "Visual Basic"],
      description:
        "An IoT project with Arduino, streamlined Dev Ops processes, C++ for system development, and Visual Basic for user interface design. Build the next generation of connected devices!",
    },
    {
      name: "Project H",
      mentor: "Mentor H",
      repoLink: "https://github.com/projectH",
      slackChannelLink: "https://slack.com/projectH",
      tags: ["Brainfuck", "Lua", "NumPy", "Markdown"],
      description:
        "An experimental project pushing the boundaries with Brainfuck, Lua scripting, NumPy for numerical computing, and Markdown for documentation. Embrace chaos and creativity in programming!",
    },
    {
      name: "Project I",
      mentor: "Mentor I",
      repoLink: "https://github.com/projectI",
      slackChannelLink: "https://slack.com/projectI",
      tags: ["Objective-C", "Python traceback", "xBase", "CSS"],
      description:
        "A cross-language project embracing Objective-C, Python traceback analysis, xBase for data management, and CSS for styling web interfaces. Break down language barriers in software development!",
    },
    {
      name: "Project J",
      mentor: "Mentor J",
      repoLink: "https://github.com/projectJ",
      slackChannelLink: "https://slack.com/projectJ",
      tags: ["C", "HTML+PHP", "ApacheConf", "TypeScript"],
      description:
        "A multi-paradigm project featuring C programming, dynamic web development with HTML+PHP, ApacheConf for server configurations, and TypeScript for enhanced JavaScript development. Create powerful and dynamic web applications!",
    },
    {
      name: "Project K",
      mentor: "Mentor K",
      repoLink: "https://github.com/projectK",
      slackChannelLink: "https://slack.com/projectK",
      tags: ["Scala", "VimL", "Clojure", "Cython"],
      description:
        "An eclectic project combining the strengths of Scala, VimL for efficient text editing, Clojure for functional programming, and Cython for enhancing Python performance. Dive into a world of language diversity!",
    },
    {
      name: "Project L",
      mentor: "Mentor L",
      repoLink: "https://github.com/projectL",
      slackChannelLink: "https://slack.com/projectL",
      tags: ["Cuda", "Elm", "CoffeeScript", "Sage"],
      description:
        "A computational project utilizing Cuda for parallel computing, Elm for frontend development, CoffeeScript for elegant scripting, and Sage for mathematical computing. Explore the computational realm with high-performance technologies!",
    },
    {
      name: "Project M",
      mentor: "Mentor M",
      repoLink: "https://github.com/projectM",
      slackChannelLink: "https://slack.com/projectM",
      tags: ["Haskell", "reStructuredText", "Java Server Pages", "PHP"],
      description:
        "An intellectually stimulating project featuring Haskell, reStructuredText for documentation, Java Server Pages for dynamic web content, and PHP for server-side scripting. Challenge your mind with functional programming and dynamic web development!",
    },
    {
      name: "Project N",
      mentor: "Mentor N",
      repoLink: "https://github.com/projectN",
      slackChannelLink: "https://slack.com/projectN",
      tags: ["Ruby", "Quantum Computing", "Java", "JavaScript"],
      description: "An interdisciplinary project ",
    },
    {
      name: "Project O",
      mentor: "Mentor O",
      repoLink: "https://github.com/projectO",
      slackChannelLink: "https://slack.com/projectO",
      tags: ["Io", "Machine Learning", "Emacs Lisp", "Cryptocurrency"],
      description:
        "A forward-thinking project utilizing Io programming language, advanced Machine Learning techniques, Emacs Lisp for extensibility, and exploring the realm of Cryptocurrency. Step into the future of programming and finance!",
    },
    {
      name: "Project P",
      mentor: "Mentor P",
      repoLink: "https://github.com/projectP",
      slackChannelLink: "https://slack.com/projectP",
      tags: ["Common Lisp", "HTML", "Diff", "Python"],
      description:
        "A project delving into Common Lisp, HTML for web development, version control with Diff, and Python for scripting and automation. Embrace the power of Lisp and Python in web development and version control!",
    },
    {
      name: "Project Q",
      mentor: "Mentor Q",
      repoLink: "https://github.com/projectQ",
      slackChannelLink: "https://slack.com/projectQ",
      tags: ["YAML", "ASP", "Makefile", "JSON"],
      description:
        "A project  build automation, and JSON for data interchange. Structure your data and streamline your development workflow!",
    },
    {
      name: "Project R",
      mentor: "Mentor R",
      repoLink: "https://github.com/projectR",
      slackChannelLink: "https://slack.com/projectR",
      tags: ["FORTRAN", "SCSS", "Automation", "R"],
      description:
        "A legacy-friendly project incorporating FORTRAN for scientific computing, SCSS for styling, Automation processes, and statistical computing with R. Blend legacy and modern technologies for scientific breakthroughs!",
    },
    {
      name: "Project S",
      mentor: "Mentor S",
      repoLink: "https://github.com/projectS",
      slackChannelLink: "https://slack.com/projectS",
      tags: ["Sass", "AppleScript", "Go", "Less"],
      description:
        "A project with a modern twist using Sass for stylesheets, AppleScript for automation on macOS, Go for efficient development, and Less for dynamic styles. Modernize your development workflow with these cutting-edge technologies!",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-28">
      <h1 className="text-5xl md:text-7xl font-bold text-center">Projects</h1>
      <div className="p-4 my-4 mx-0">
        <div className="w-full bg-none border-none">
          <input
            className="py-4 px-6 rounded-md outline-none w-[80vw] max-w-3xl border-none text-black font-semibold bg-none"
            type="text"
            placeholder="Search your query"
            // onChange={onChangeHandler}
            // value={query}
          ></input>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-8 items-start">
        <div className="grid gap-4">
          {projectList
            .filter((_, index) => index % 4 === 0)
            .map((card) => (
              <ProjectCard
                key={card.name}
                name={card.name}
                description={card.description}
                tags={card.tags as string[]}
                mentor={card.mentor}
              />
            ))}
        </div>
        <div className="grid gap-4">
          {projectList
            .filter((_, index) => index % 4 === 1)
            .map((card) => (
              <ProjectCard
                key={card.name}
                name={card.name}
                description={card.description}
                tags={card.tags as string[]}
                mentor={card.mentor}
              />
            ))}
        </div>
        <div className="grid gap-4">
          {projectList
            .filter((_, index) => index % 4 === 2)
            .map((card) => (
              <ProjectCard
                key={card.name}
                name={card.name}
                description={card.description}
                tags={card.tags as string[]}
                mentor={card.mentor}
              />
            ))}
        </div>
        <div className="grid gap-4">
          {projectList
            .filter((_, index) => index % 4 === 3)
            .map((card) => (
              <ProjectCard
                key={card.name}
                name={card.name}
                description={card.description}
                tags={card.tags as string[]}
                mentor={card.mentor}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
