import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/faq.scss';

export default function FAQ() {
  return (
    <div className='FAQs'>
      <Navbar />
      <section className='hero is-medium is-warning is-bold' id="faq">
        <div className='hero-body'>
          <div className='container' id="content-faq">
            <h1 className='title' style={{'color': 'white'}}>Frequently Asked Questions</h1>
            <h2 className='subtitle' style={{'color': 'white'}}>
              Wanna Ask us a question? Check these first!
            </h2>
          </div>
        </div>
      </section>

      <div className='container' style={{margin: '40px 6%'}}>
        <h1>General</h1>

        <h4>
          I do not have any prior knowledge of git and/or any programming
          language. Can I do this?
        </h4>

        <p>
          Absolutely. This program is specifically catered to the growth and
          smooth transition of people like you who want to learn. KOSS and the
          mentors will help you wherever possible.
        </p>

        <h4>
          What is the deadline for selecting projects? How many projects can we
          select?
        </h4>

        <p>
          There is no deadline for selecting projects nor is there any
          restriction on the number of projects you can contribute to; you can
          also switch between projects as much as you want. The only necessity
          is that you should have made at least one commit before mid-term
          evaluations.
        </p>

        <h4>
          Where does KWoC occur? Do I need to be a student of IIT Kharagpur?
        </h4>

        <p>
          Kharagpur Winter of Code is to be done remotely from home, and it is
          not required for you to be student of ANY particular institute.
        </p>

        <h4>
          What is the purpose of this program? Is this some kind of internship?
        </h4>

        <p>
          No, KWoC is a program which aims at helping participants learn how to
          contribute in the open-source world. This activity prepares you for
          various open source opportunities such as Google Summer of Code, Rail
          Girl's Summer of Code and Outreachy.
        </p>

        <h4>Can I participate in KWoC as both a mentor and a student?</h4>

        <p>
          We do encourage participation into project development from everyone;
          but if you are a mentor we won't be publishing your stats nor will you
          be going through evaluations.
        </p>

        <h4>What can I do to help spread the word about KWoC?</h4>

        <p>
          Nothing makes us happier than people spreading words about
          open-source; to begin, you can like our facebook page and increase
          awareness about KWoC in your college; nothing works better than word
          of mouth.
        </p>

        <h4>What if I have a question not answered in this FAQ?</h4>

        <p>
          Please make sure to read the website. If after reading through it you
          still don't have an answer please consider reaching out to us on our 
          <a href="mailto:admin@kossiitkgp.org"> mail address</a>.
        </p>

        <h1>Students</h1>

        <h4>How should I get selected in KWOC?</h4>

        <p>
          There is absolutely no selection criteria for students. You are
          selected in the program as soon as you register. So you don't have to
          ask your mentors "How to get selected for your project?", but instead
          go ahead with "How can I contribute to your project?".
        </p>


        <h4>My mentor is not replying, What should I do?</h4>

        <p>
          Please be patient with your mentor(s). If you do not get a response on
          the communication channel, contact the mentor on their email id. If no
          response for 3 days, inform us.
        </p>

        <h4>What is the last date of student registration?</h4>

        <p>
          Students registration deadline is 4th December. The contribution
          chart goes live at the same time, so be quick, early bird catches the
          worm :) .
        </p>

        <h4>
          Can I show the contributions that I have made in KWoC for
          participating in any competitions?
        </h4>

        <p>
          All the contributions that you will make in KWoC will be displayed on
          your GitHub timeline. So, that is a big plus if you are participating
          in any competitions and your GitHub profile is on display.
        </p>

        <h4>Can I apply if I am not a student of IIT Kharagpur ?</h4>

        <p>
          Sure ! Our program is open to all students irrespective of college !
          Is there any eligibility criteria and pre-requisites? There is no
          strict eligibility criteria as such. Read <a href="https://www.quora.com/What-is-the-prerequisite-for-participating-in-Kharagpur-Winter-of-Code-2016">this</a> Quora answer by Pranit
          Bauva.
        </p>

        <h4>
          Can you provide me any advice so that I can start preparing for it
          beforehand?
        </h4>

        <p>
          Play around git and GitHub. Create an account on GitHub, set up git on
          your machine and start experimenting with it. You can also begin by
          following Codecademy's git interactive tutorial.
        </p>

        <h4>What are my chances of receiving a position in KWoC?</h4>

        <p>
          Pretty fair ! You need to be working for the whole month regardless of
          your expertise level.
        </p>

        <h4>
          Are their any other similar kind of programme that I might find of
          interest?
        </h4>

        <p>
          Other program similar to KWoC are GirlScript Summer of Code organised
          by GirlScript India. If you meant similar to GSoC, then look around,
          there are plenty of them e.g. KDE summer of code, Outreachy, Rails
          summer of code, etc.
        </p>

        <h4>How much time in a day do I need to give for KWoC?</h4>

        <p>
          GSoC requires 40 hours per week in summers. For KWoC, you may give 1-2
          hours daily and that includes conversation with your mentor(s). More
          the projects you choose, more time in conversing about the work.
        </p>

        <h4>Will I receive a certificate at the end of the KWoC?</h4>

        <p>
          If you remain with us till the end of the program, then you'll receive
          a certificate for completion of the program.
        </p>

        <h4>Which programming language(s) do I need to be fluent in?</h4>

        <p>
          Programming languages are just like communication languages; it is
          sufficient to know one or two, but the more you know the better it is.
        </p>

        <h4>Will taking part in KWoC help me in being a part of KOSS?</h4>

        <p>
          If your purpose to be with us is pure, and you are deemed worthy; then
          yes!
        </p>

        <h4>Can I work on more than one project?</h4>

        <p>
          Yes! You can even work in parallel on them. Well, if you are a beginner
          it is advisable to focus your attention at one thing at a time. But
          the choice rests with you.
        </p>

        <h4>
          What if I am unable to meet the deadlines due to some unavoidable
          reasons?
        </h4>

        <p>Contact us!</p>

        <h4>
          Will this programme help me in improving competitive coding skills or
          get selected for ACM ICPC?
        </h4>

        <p>
          Participating in Open Source contribution improves your skills of
          software development and of a particular programming language.
          Depending on your project, you might be able to use some algorithms
          too. But you should not be direct improvement on your competitive
          coding skills.
        </p>

        <h4>
          What are the minimum contributions I have to do to get successfully
          recognized as to have completed the programme?
        </h4>

        <p>
          That will based on mentor's feedback. You need to have done at least
          one commit by the mid-term to be eligible for continuing the program.
        </p>
      </div>
      <Footer />
    </div>
  );
}
