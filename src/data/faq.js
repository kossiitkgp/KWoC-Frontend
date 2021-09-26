const faqs = [
  // general
  {
    q:
      "I do not have any prior knowledge of git and/or any programming language. Can I do this?",
    a:
      "Absolutely. This program is specifically catered to the growth and smooth transition of people like you who want to learn. KOSS and the mentors will help you wherever possible.",
    tags: ["get-started", "start", "beginner"],
  },
  {
    q:
      "What is the deadline for selecting projects? How many projects can we select?",
    a:
      "There is no deadline for selecting projects nor is there any restriction on the number of projects you can contribute to; you can also switch between projects as much as you want. The only necessity is that you should have made at least one commit before mid-term evaluations.",
    tags: ["select", "choose", "proposal"],
  },
  {
    q: "Where does KWoC occur? Do I need to be a student of IIT Kharagpur?",
    a:
      "Kharagpur Winter of Code is to be done remotely from home, and it is not required for you to be student of ANY particular institute",
    tags: ["offline", "remote", "work from home", "online", "college"],
  },
  {
    q: "What is the purpose of this program? Is this some kind of internship?",
    a:
      "No, KWoC is a program which aims at helping participants learn how to contribute in the open-source world. This activity prepares you for various open source opportunities such as Google Summer of Code, Rail Girl's Summer of Code and Outreachy",
    tags: ["benefits", "why to", "advantages"],
  },
  {
    q: "Can I participate in KWoC as both a mentor and a student?",
    a:
      "Yes, you can participate in KWoC both as a mentor and a student. But you will not be awarded certificate for having contributions only in your project.",
    tags: ["double", "role"],
  },
  {
    q: "What can I do to help spread the word about KWoC?",
    a:
      "Nothing makes us happier than people spreading words about open-source; to begin, you can like our facebook page and increase awareness about KWoC in your college; nothing works better than word of mouth.",
    tags: ["support", "help", "thank"],
  },
  {
    q: "What if I have a question not answered in this FAQ?",
    a:
      "Please make sure to read the website. If after reading through it you still don't have an answer please consider reaching out to us at admin@kossiitkgp.org",
    tags: ["help", "contact", "support"],
  },
  // students
  {
    q: "How should I get selected in KWOC?",
    a:
      "There is absolutely no selection criteria for students. You are selected in the program as soon as you register. So you don't have to ask your mentors 'How to get selected for your project?', but instead go ahead with 'How can I contribute to your project?'",
    tags: ["selection"],
  },
  {
    q: "My mentor is not replying, What should I do?",
    a:
      "Please be patient with your mentor(s). If you do not get a response on the communication channel, contact the mentor on their email id. If no response for 3 days, inform us.",
    tags: ["inactive", "seen zone", "ignore"],
  },
  {
    q: "What is the last date of student registration?",
    a:
      "Students registration deadline is 4th December. The contribution chart goes live at the same time, so be quick, early bird catches the worm :)",
    tags: ["deadline"],
  },
  {
    q:
      "Can I show the contributions that I have made in KWoC for participating in any competitions?",
    a:
      "All the contributions that you will make in KWoC will be displayed on your GitHub timeline. So, that is a big plus if you are participating in any competitions and your GitHub profile is on display. The certificate we provide also contains a link to your contribution's stats from KWoC",
    tags: ["display", "share", "certificate"],
  },
  {
    q: "Can I apply if I am not a student of IIT Kharagpur ?",
    a:
      "Sure ! Our program is open to all students irrespective of college ! Is there any eligibility criteria and pre-requisites? There is no strict eligibility criteria as such. Read this Quora answer by Pranit Bauva - https://www.quora.com/What-is-the-prerequisite-for-participating-in-Kharagpur-Winter-of-Code-2016",
    tags: ["who can", "for whom", "outside"],
  },
  {
    q:
      "Can you provide me any advice so that I can start preparing for it beforehand?",
    a:
      "Play around git and GitHub. Create an account on GitHub, set up git on your machine and start experimenting with it. You can also begin by following Codecademy's git interactive tutorial.",
    tags: ["suggestion", "start"],
  },
  // {
  //     "q": "What are my chances of receiving a position in KWoC?",
  //     "a": "Pretty fair ! You need to be working for the whole month regardless of your expertise level."
  // },
  {
    q:
      "Are their any other similar kind of programme that I might find of interest?",
    a:
      "Other program similar to KWoC are GirlScript Summer of Code organised by GirlScript India. If you meant similar to GSoC, then look around, there are plenty of them e.g. KDE summer of code, Outreachy, Rails summer of code, etc.",
    tags: ["other programs"],
  },
  {
    q: "Do you provde any stipend or Goodies?",
    a:
      "Sorry, we don't provide any stipend or Goodies. But we do provide a certificate on successful completion of KWoC",
    tags: ["money", "salary", "swag", "gifts", "success"],
  },
  // DISCUSSION NEEDED below
  {
    q: "How much time in a day do I need to give for KWoC?",
    a:
      "GSoC requires 40 hours per week in summers. For KWoC, you may give 1-2 hours daily and that includes conversation with your mentor(s). More the projects you choose, more time in conversing about the work.",
    tags: ["busy", "hours", "commitment", "schedule", "exams", "busy"],
  },
  {
    q: "Will I receive a certificate at the end of the KWoC?",
    a:
      "Yes, if you clear the mid evals and end evals successfully, you will receive a certificate",
    tags: ["completion", "success", "end"],
  },
  {
    q: "Which programming language(s) do I need to be fluent in?",
    a:
      "Programming languages are just like communication languages; it is sufficient to know one or two",
    tags: ["language", "technologies", "C", "know", "only"],
  },
  {
    q: "Will taking part in KWoC help me in being a part of KOSS?",
    a:
      "If your purpose to be with us is pure, and you are deemed worthy; then yes!",
    tags: ["KOSS", "selected"],
  },
  {
    q: "Can I work on more than one project?",
    a:
      "Yes! You can even work in parallel on them. Well, if you are a beginner it is advisable to focus your attention at one thing at a time. But the choice rests with you.",
    tags: [
      "parallel",
      "multiple",
      "more than one",
      "multi",
      "many",
      "other projects",
    ],
  },
  {
    q:
      "What if I am unable to meet the deadlines due to some unavoidable reasons?",
    a: "Contact us at admin@kossiitkgp.org",
    tags: ["help", "miss", "forgot"],
  },
  {
    q:
      "Will this programme help me in improving competitive coding skills or get selected for ACM ICPC?",
    a:
      "Participating in Open Source contribution improves your skills of software development and of a particular programming language. Depending on your project, you might be able to use some algorithms too. But you should not be direct improvement on your competitive coding skills.",
    tags: ["CP", "competitive", "FAANG"],
  },
  {
    q:
      "What are the minimum contributions I have to do to get successfully recognized as to have completed the programme?",
    a:
      "That will based on mentor's feedback. You need to have done at least one commit by the mid-term to be eligible for continuing the program.",
    tags: ["minimum", "clear", "certificate"],
  },
  // Mentor - New FAQs as per this year
  {
    q: "Can a project have multiple mentors?",
    a:
      "Yes, we allow upto 2 mentors per project. Both the mentors should register on KWoC website. But it is sufficient if one of the mentors registers the project and adds the Second mentor's name in the form.",
    tags: ["more than one", "more mentors", "two mentors"],
  },
  {
    q: "Are there any evaluations for mentors?",
    a:
      "No, there are no evaluations for mentors. All the mentors, who have hosted their project in KWoC will be given certificate.",
  },
  {
    q:
      "As a mentor what do I do, if some users post spam in my communication channel?",
    a:
      "Remove such users from your workspace. Report us their name with email id, if they are participating in KWoC, we will take necessary actions",
    tags: ["spam", "indiscipline", "complaint", "disrespectful", "chaos"],
  },
  {
    q: "What if I want to host all my organization projects as a mentor?",
    a:
      "We request you to register all the projects indiviually. It will help us to keep track of individual Project's stats",
    tags: ["Github organization", "org", "company", "group", "community"],
  },
  // Stats
  {
    q: "Why my commits are not being shown?",
    a: `Note that commits are shown only after your Pull Request(PR) is merged. If your commits are not displayed, despite the PR being merged. The following can be reasons \n
                1. PR merged in the wrong Branch: While registering the project, the mentor is asked to select the branch, on which KWoC students will be working. If your PR is merged in a different branch, then your commits might have not been counted. Please ask your mentor to the branch from his/her KWoC dashboard.
                
                2. Wrong email configuration: If your email configuration is not set properly in Git and Github, Github doesn’t count it as a contribution from your account. Refer https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#:~:text=Your%20local%20Git%20commit%20email,appear%20on%20your%20contributions%20graph. To check whether Github has counted your contribution or not
                Visit the Project’s commits page on Github, the URL is in the format of “https:github.com/USERNAME/REPONAME/commits/BRANCH_NAME”
                In the list of commits, find your commit.
                Below the commit message, your github username and Github display picture(DP) are present. If instead of your DP, Github’s logo is present in grey color, it indicates that your email configuration is incorrect.
                To fix this issue, follow these docs - https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address. If you have followed the instructions in the doc correctly, your future commits will be counted by Github.

        If (1) and (2) do not help, please email admin@kossiitkgp.org with the following details- -Your github username, 
        - Github Repository link of the project you have contributed
        - Link(s) to the merged Pull Request
        `,

    tags: [
      "stats",
      "dashboard",
      "incorrect",
      "not showing",
      "not displaying",
      "wrong",
      "not updating",
      "pull request",
      "table",
    ],
  },
];
