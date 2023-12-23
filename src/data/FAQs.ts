import { KOSS_CONTACT_EMAIL } from "../util/constants";
import TIMELINE from "./timeline.json";

export const FAQs = [
  {
    question:
      "I do not have any prior knowledge of git and/or any programming language. Can I do this?",
    answer: [
      "Absolutely. This program is specifically catered to the growth and smooth transition of people like you who want to learn. KOSS and the mentors will help you wherever possible.",
      "To learn more about git and github, check <a class='text-primary font-semibold' target='_blank' href='https://github.com/kossiitkgp/events/tree/main/2023/Spring/Git-github'>these</a>.",
    ],
  },
  {
    question:
      "What is the deadline for selecting projects? How many projects can we select?",
    answer: [
      "There is no deadline for selecting projects nor is there any restriction on the number of projects you can contribute to",
      "you can also switch between projects as much as you want. The only necessity is that you should have atleast one merged PR per week.",
    ],
  },
  {
    question:
      "Where does KWoC occur? Do I need to be a student of IIT Kharagpur?",
    answer: [
      "Kharagpur Winter of Code is to be done remotely from home, and it is not required for you to be student of <b>ANY</b> particular institute.",
    ],
  },
  {
    question:
      "What is the purpose of this program? Is this some kind of internship?",
    answer: [
      "<b>No</b>, KWoC is a program which aims at helping participants learn how to contribute in the open-source world. This activity prepares you for various open source opportunities such as <a class='text-primary font-semibold' target='_blank' href='https://summerofcode.withgoogle.com/archive/'>Google Summer of Code</a>, <a class='text-primary font-semibold' target='_blank' href='https://railsgirlssummerofcode.org'>Rail Girl's Summer of Code and Outreachy</a>.",
    ],
  },
  {
    question: "Can I participate in KWoC as both a mentor and a student?",
    answer: ["No, you can not."],
  },
  {
    question: "What can I do to help spread the word about KWoC?",
    answer: [
      "Nothing makes us happier than people spreading words about open-source; to begin, you can connect with our <a class='text-primary font-semibold' target='_blank' href='https://www.facebook.com/kossiitkgp'>Facebook</a>, <a class='text-primary font-semibold' target='_blank' href='https://www.linkedin.com/company/kharagpur-open-source-society'>Linkedin</a>, <a class='text-primary font-semibold' target='_blank' href='https://twitter.com/kossiitkgp'>Twitter</a> handles and increase awareness about KWoC in your college; nothing works better than word of mouth.",
    ],
  },
  {
    question: "What if I have a question not answered in this FAQ?",
    answer: [
      "Please make sure to go through the respective manual. If after reading through it you still don't have an answer please consider reaching out to us on admin@kossiitkgp.org.",
    ],
  },
  {
    question: "How should I get selected in KWoC?",
    answer: [
      "There is absolutely no selection criteria for students. You are selected in the program as soon as you register. So you don't have to ask your mentors 'How to get selected for your project?', but instead go ahead with <b>'How can I contribute to your project?'</b>.",
    ],
  },
  {
    question: "My mentor is not replying, What should I do?",
    answer: [
      `Please be patient with your mentor(s). If you do not get a response on the communication channel, contact the mentor on their email id. If no response for 3 days, inform us at <a class='text-primary font-semibold' target='_blank' href='mailto:${KOSS_CONTACT_EMAIL}'>${KOSS_CONTACT_EMAIL}</a>.`,
    ],
  },
  {
    question: "What is the last date of student registration?",
    answer: [
      "'Early bird catches the worm'",
      `Students registration deadline is ${TIMELINE[3].date}. The contribution chart goes live at the same time, so be quick.`,
    ],
  },
  {
    question:
      "Can I show the contributions that I have made in KWoC for participating in any competitions?",
    answer: [
      "All the contributions that you will make in KWoC will be displayed on your GitHub timeline. So, that is a big plus if you are participating in any competitions and your GitHub profile is on display.",
    ],
  },
  {
    question:
      "Can you provide me any advice so that I can start preparing for it beforehand?",
    answer: [
      "Get familiar with Git and Github. Check <a class='text-primary font-semibold' target='_blank' href='https://opensource.guide'>this</a> Open Source guide. Also, practice git <a class='text-primary font-semibold' target='_blank' href='https://gitimmersion.com/index.html'>here</a>. You can also begin by following <a class='text-primary font-semibold' target='_blank' href='https://www.codecademy.com/learn/learn-git'>Codecademy's git interactive tutorial</a>.",
    ],
  },
  {
    question:
      "Is there any other similar kind of program that I might find interesting?",
    answer: [
      "Other programs similar to KWoC are <a class='text-primary font-semibold' target='_blank' href='https://gssoc.girlscript.tech'>GirlScript Summer of Code</a> organised by GirlScript India. If you meant similar to GSoC, then check out <a class='text-primary font-semibold' target='_blank' href='https://github.com/deepanshu1422/List-Of-Open-Source-Internships-Programs'>this</a> awesome list of programs.",
    ],
  },
  {
    question: "How much time in a day do I need to give for KWoC?",
    answer: [
      "GSoC requires 40 hours per week in summers. For KWoC, you may give 1-2 hours daily and that includes conversation with your mentor(s). More the projects you contribute to, more the time in conversing about the work.",
    ],
  },
  {
    question: "Will I receive a certificate at the end of the KWoC?",
    answer: [
      "If you remain with us till the end of the program, then you'll receive a certificate for completion of the program. You would have to clear both the mid and end evaluation to get the certificate. More details can be found in our manual.",
    ],
  },
  {
    question: "Which programming language(s) do I need to be fluent in?",
    answer: [
      "It is sufficient to know one or two, but the more you know the better it is. You can also learn a language during KWoC.",
    ],
  },
  {
    question: "Will taking part in KWoC help me in being a part of KOSS?",
    answer: [
      "If your purpose to be with us is pure, and you are deemed worthy; then yes!, provided you are a student of IIT Kharagpur.",
    ],
  },
  {
    question: "Can I work on more than one project?",
    answer: [
      "Yes! You can even work in parallel on them. Well, if you are a beginner it is advisable to focus your attention at one thing at a time. But the choice rests with you.",
    ],
  },
  {
    question:
      "What if I am unable to meet the deadlines due to some unavoidable reasons?",
    answer: [
      `Contact us via <a class='text-primary font-semibold' target='_blank' href='mailto:${KOSS_CONTACT_EMAIL}'>${KOSS_CONTACT_EMAIL}</a>.`,
    ],
  },
  {
    question:
      "Will this programme help me in improving competitive coding skills or get selected for ACM ICPC?",
    answer: [
      "Participating in Open Source contribution improves your skills of software development and of a particular programming language. Depending on your project, you might be able to use some algorithms too. But you should not relate to direct improvement on your competitive coding skills.",
    ],
  },
  {
    question:
      "What are the minimum contributions I have to do to get successfully recognized as to have completed the programme?",
    answer: [
      "That will based on mentor's feedback. You need to have at least one merged PR by the mid-evals to be eligible for continuing the program.",
      "Atleast one more merged PR between mid and end evals and a blog post describing how you contributed!",
    ],
  },
  {
    question: "How are commits counted?",
    answer: [
      "Commits are counted only after your PR is merged in the mentor's repository. The PR must be opened using the Github account you logged in with and your username should not be changed during the KWoC coding period.",
    ],
  },
  {
    question: "What to do, if my stats are not being updated?",
    answer: [
      `Stats are only counted once coding period starts. They are updated periodically and it may take a few hours for them to update. If your stats do not update in a day, contact us at <a class='text-primary font-semibold' target='_blank' href='mailto:${KOSS_CONTACT_EMAIL}'>${KOSS_CONTACT_EMAIL}</a>.`,
    ],
  },
];
