import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';

export default function Footer() {
  return (
    <section className='footer-btm'>
      <footer>
        <div className='container'>
          <div className='columns is-vcentered'>
            <div className='column'>
              <h1>Kharagpur Winter of Code</h1>
              <h2>With &#10084; by KOSS</h2>
            </div>
            <div className='column'></div>
            <div className='column'>
              <a>Manuals</a>
              <a href='https://github.com/kossiitkgp/kwoc-2018/blob/master/static/files/KWoCStudentManual.pdf'>
                Student Manual
              </a>
              <a href='https://github.com/kossiitkgp/kwoc-2018/blob/master/static/files/KWoCMentorManual.pdf'>
                Mentor Manual
              </a>
            </div>
            <div className='column'>
              <a href='/#tline'>Timeline</a>
              <a href='https://www.facebook.com/groups/kwoc2016'>
                Social Groups
              </a>
              <Link to='/FAQ'>FAQ</Link>
              <Link to='/about'>About KOSS</Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
