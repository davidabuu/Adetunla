import Link from 'next/link';
import React from 'react';
import { FooterStyle } from '../../StyledComponents/Styled';

const Footer = () => {
  return (
    <FooterStyle>
      <ul>
        <Link href='/'>
          <a>
            <p>dotamn@gmail.com</p>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <li>Phone Number</li>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <li>Email</li>
          </a>
        </Link>
            <div className='social'>
                <h2>Social Media</h2>
                <p>FaceBook</p>
                <p>FaceBook</p>
                <p>FaceBook</p>
            </div>
      </ul>
    </FooterStyle>
  );
};

export default Footer;
