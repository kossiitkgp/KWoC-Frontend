import houses from '../assets/houses-left.png';
import hook from '../assets/igloo-scroll-hook-edit.png';
import sign from '../assets/sign-post.png';
import "../styles/Hero.css";
import "../styles/App.css";
import { FaDiscord } from 'react-icons/fa';
import { DISCORD_INVITE, MENTOR_MANUAL_LINK, STUDENT_MANUAL_LINK } from '../util/constants';

export const HeroComponent = () => {
  return (
    <div className='hero-container'>
      <div className="hero-text-container">
        <div className="hero-quote">
          "For the love of open source"
        </div>
        <div className="hero-title">
          <h1>Kharagpur <span className='yellow-text'>Winter<br />of Code</span> 2024</h1>
        </div>
        <div className="hero-button-container">
          <div className='manual'>
            <a href={STUDENT_MANUAL_LINK} target="_blank"><button className='hero-button left-button'>Student Manual</button> </a>
            <a href={MENTOR_MANUAL_LINK} target="_blank"><button className='hero-button right-button'>Mentor Manual</button> </a>
          </div>
          <a href={DISCORD_INVITE} target="_blank"><button className='discord-button'><FaDiscord className='discord-icon' /><p>Join Our Discord Server</p></button> </a>
        </div>
      </div>
      <div className="hero-images">
        <div className="left-houses">
          <img className="house-image" src={houses} alt="houses" />
        </div>
        <div className="middle-igloo">
          <img className="igloo-image" src={hook} alt='igloo' />
        </div>
        <div className="right-sign-post">
          <img className="sign-image" src={sign} alt='sign-post' />
        </div>
      </div>
    </div>
  );
};
