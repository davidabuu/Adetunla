import Link from 'next/link';
import React from 'react';
import { FooterStyle } from '../../StyledComponents/Styled';
import { Facebook, Twitter, Instagram, Email, Phone } from '@material-ui/icons';
const Footer = () => {
  return (
    <FooterStyle>
      <ul>
        <Link href='/'>
          <a>
            <Email />
            <p>adetunla.adedotun@abuad.edu.ng</p>
            <div></div>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <Phone />
            <li>+234 803 576 5947</li>
            <div></div>
          </a>
        </Link>
        <div className='social'>
          <h2>Social Media</h2>
          <div className='social-flex'>
          <div>
            <Facebook />
          </div>
          <div>
            <Twitter />
          </div>
          <div>
            <Instagram />
          </div>
          </div>
        </div>
      </ul>
    </FooterStyle>
  );
};

export default Footer;
