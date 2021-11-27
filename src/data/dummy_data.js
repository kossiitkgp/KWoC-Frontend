const studentResources = [
  {
    message: "Writing Kickass READMEs",
    url: "https://bauva.com/blog/writing-kickass-readmes/",
    avatar: "https://bauva.com/images/pranit.jpg",
  },
  {
    message: "Everything you need to ace KWoC",
    url: "https://medium.com/kharagpur-open-source-society/an-informal-introduction-to-kwoc-62fc5e686f79",
    avatar: "https://miro.medium.com/max/66/1*S7YHjDmgGnBEJcE116qQ7w.jpeg",
  },
  {
    message: "How to choose a Project for KWoC",
    url: "https://telegra.ph/How-to-choose-a-Project-for-KWoC-12-01",
    avatar: "https://telegra.ph/favicon.ico",
  },
  {
    message: "Codeacademy: Learn Git",
    url: "https://www.codecademy.com/learn/learn-git",
    avatar: "https://www.codecademy.com/favicon.ico",
  },
  {
    message: "Git Flight Rules: Cookbook for Git",
    url: "https://github.com/k88hudson/git-flight-rules",
    avatar: "https://github.com/k88hudson.png",
  },
  {
    message: "GitHub: Hello World Tutorial",
    url: "https://guides.github.com/activities/hello-world/",
    avatar: "https://guides.github.com/favicon.ico",
  },
];

const mentorResources = [
  {
    message: "Writing Kickass READMEs",
    url: "https://bauva.com/blog/writing-kickass-readmes/",
    avatar: "http://www.bauva.com/images/bio-photo.jpg",
  },
  {
    message: "Make a README",
    url: "https://www.makeareadme.com/",
    avatar:
      "https://d33wubrfki0l68.cloudfront.net/ca149ad795cbdbe3a450dd7985baf0d763cc2fb6/0220f/images/owlbert.jpg",
  },
  {
    message: "How to Write Beautiful and Meaningful README.md",
    url: "https://blog.bitsrc.io/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991",
    avatar: "https://miro.medium.com/fit/c/96/96/1*50FKErsxynOeSmrUZk5Bsw.jpeg",
  },
  {
    message: "What being a Google Summer of Code mentor taught me?",
    url: "https://hackernoon.com/what-being-a-google-summer-of-code-mentor-taught-me-8c97aad503a5",
    avatar: "https://hackernoon.com/avatars/pwtNTVrD7BPYArwg776n1wGXP193.png",
  },
  {
    message: "Official GSoC Mentoring Guide",
    url: "https://google.github.io/gsocguides/mentor/mind-the-gap",
    avatar: "https://google.github.io/gsocguides/images/sun-small.png",
  },
  {
    message: "OSS Maintainer and being a Mentor",
    url: "https://www.bwplotka.dev/2020/how-to-became-oss-maintainer/",
    avatar: "https://www.bwplotka.dev/images/profile.jpg",
  },
];

// sample data kept for future reference
const sampleData = {
  name: "Aditya Vikram Singh",
  github: "xypnox",
  college: "IIT Kharagpur",
  commits: {
    count: 235,
    commits: [
      {
        hash: "234rrt",
        project: "xypnox/xyplot",
        messsage: "Compress residual images for faster loading speed",
      },
      {
        hash: "aw3548",
        project: "kossiitkgp/darkHorse",
        messsage: "Fix: Typo and spacing",
      },
      {
        hash: "hhstb32",
        project: "xypnox/todxpy",
        messsage: "Introduce new sorting for todos",
      },
      {
        hash: "y67eb6",
        project: "kossiitkgp/KWoC",
        messsage: "Replace navbar with footer for fun",
      },
    ],
  },
  // this is the total sum of PRs for all the projects that he has been mentoring.
  pullRequests: {
    count: 12,
    open: 5,
    closed: 6,
  },
  linesOfCode: {
    count: "126k",
  },
  languages: ["Python", "Javascript", "HTML", "CSS"],
  projects: ["darkHorse", "todxpy", "KWoC"],
  resources: [
    {
      message: "Writing Kickass READMEs",
      url: "http://www.bauva.com/blog/Writing-Kickass-READMEs/",
      avatar: "http://www.bauva.com/images/bio-photo.jpg",
    },
    {
      message: "Make a README",
      url: "https://www.makeareadme.com/",
      avatar:
        "https://d33wubrfki0l68.cloudfront.net/ca149ad795cbdbe3a450dd7985baf0d763cc2fb6/0220f/images/owlbert.jpg",
    },
    {
      message: "How to Write Beautiful and Meaningful README.md",
      url: "https://blog.bitsrc.io/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991",
      avatar:
        "https://miro.medium.com/fit/c/96/96/1*50FKErsxynOeSmrUZk5Bsw.jpeg",
    },
    {
      message: "What being a Google Summer of Code mentor taught me?",
      url: "https://hackernoon.com/what-being-a-google-summer-of-code-mentor-taught-me-8c97aad503a5",
      avatar: "https://hackernoon.com/avatars/pwtNTVrD7BPYArwg776n1wGXP193.png",
    },
    {
      message: "Official GSoC Mentoring Guide",
      url: "https://google.github.io/gsocguides/mentor/mind-the-gap",
      avatar: "https://google.github.io/gsocguides/images/sun-small.png",
    },
    {
      message: "OSS Maintainer and being a Mentor",
      url: "https://www.bwplotka.dev/2020/how-to-became-oss-maintainer/",
      avatar: "https://www.bwplotka.dev/images/profile.jpg",
    },
  ],
  student: ["yashrsharma44", "rakaar", "orkohunter"],
  announcement: [
    "Hi the KWOC has just started!",
    "Make sure you have submitted the mideval feedback for the student!",
    "Hi \n, the end evals have been finished!",
  ],
  evals: "Mid Eval",
};

export { studentResources, mentorResources, sampleData };
