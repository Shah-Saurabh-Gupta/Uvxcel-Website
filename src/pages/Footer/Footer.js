import React, { useState } from 'react';
import './Footer.css';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri'
import { MdFingerprint } from 'react-icons/md';
import ContactUs from '../ContactUs/ContactUs';

function Footer() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const openTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  };

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Unite with us to see the next levels together.
        </p>
        <p className='footer-subscription-text'>
          UVXCEL, Unit No. 223, Goodwill Square Mall, Dhanori, Pune
        </p>
        <div className='input-areas'>
          {/* <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form> */}
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Site Map</h2>
            <Link to='/about-us'>About Us</Link>
            <Link to='/services'>Services</Link>
            <Link to='/products'>Products</Link>
            <Link to='/careers'>Careers</Link>
            <Link to="" onClick={openModal}>Contact Us</Link>
            {modalOpen && <ContactUs setOpenModal={setModalOpen} />}
            {/* <Link to='/'>Products</Link> */}
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to="" onClick={() => openInNewTab('https://goo.gl/maps/8cDqEWi6VAhg5rSo8')}>Get Directions on Map</Link>
            <Link to='/'>+91-9823293738</Link>
            <Link to='/'>marketing@uvxcel.com</Link>
            {/* <Link to='/'>hr@uvxcel.com</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          {/* <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='' onClick={() => openTab('https://www.linkedin.com/company/uvxcel-it-solutions')}>LinkedIn</Link>
            {/* <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              {/* <MdFingerprint className='navbar-icon' /> */}
              <RiComputerLine className="navbar-icon" />
              UVXCEL
            </Link>
          </div>
          <small className='website-rights'>Designed by Shah Saurabh Gupta © 2021</small>
          <div className='social-icons'>
            {/* <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link> */}
            <Link
              className='social-icon-link'
              to={'//www.linkedin.com/company/uvxcel-it-solutions'}
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;