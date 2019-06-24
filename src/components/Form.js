import React from 'react';
import Colleges from '../data/colleges.js';
import '../styles/Form.scss';
import '../styles/css-fontello-github-circled/fontello.css';
import '../styles/css-fontello-mail-alt/fontello.css';

export default function Form() {
  return (
    <div className='box'>
      <div className='field'>
        <label className='label'>Name</label>
        <div className='control'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder=''
          />
        </div>
      </div>

      <div className='field'>
        <label className='label'>Email</label>
        <div className='control has-icons-left has-icons-right'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder=''
          />
          <span className='icon is-large is-left' id='fontello-icon'>
            <i className='icon-mail-alt' />
          </span>
        </div>
      </div>

      <div className='field'>
        <label className='label'>Github Username</label>
        <div className='control has-icons-left has-icons-right'>
          <input
            className='input is-rounded is-info'
            type='email'
            placeholder=''
          />
          <span className='icon is-large is-left' id='fontello-icon'>
            <i className='icon-github-circled' />
          </span>
        </div>
      </div>

      <div className='field'>
        <label className='label'>Select College</label>
        <div className='control'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder='Type your college name...'
            list='colleges'
          />
          <datalist id='colleges'>
            {Colleges.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </datalist>
        </div>
      </div>

      <div className='field'>
        <label className='label'>In which year are you Studying</label>
        <div className='field'>
          <div className='control' id='vertical-in-mobile'>
            <label className='radio'>
              <input type='radio' name='year-of-study' />
              1st Year
            </label>
            <label className='radio'>
              <input type='radio' name='year-of-study' />
              2nd Year
            </label>
            <label className='radio'>
              <input type='radio' name='year-of-study' />
              3rd Year
            </label>
            <label className='radio'>
              <input type='radio' name='year-of-study' />
              4th Year
            </label>
            <label className='radio'>
              <input type='radio' name='year-of-study' />
              5th Year
            </label>
          </div>
        </div>
      </div>

      <div className='field'>
        <label className='label'>How did you come to know about KWOC*</label>
        <div className='field'>
          <div className='control' id='vertical-in-mobile'>
            <label className='checkbox'>
              <input type='checkbox' />
              Social media
            </label>
            <label className='checkbox'>
              <input type='checkbox' />
              Friends
            </label>
            <label className='checkbox'>
              <input type='checkbox' />
              College
            </label>
            <label className='checkbox'>
              <input type='checkbox' />
              Others
            </label>
          </div>
        </div>
      </div>

      <div>
        <a class='button is-info is-rounded is-fullWidth column is-full'>
          Submit
        </a>
      </div>
    </div>
  );
}
