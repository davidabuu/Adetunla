import React, {useState} from 'react';
import Link from 'next/link';
import { NavStyle } from '../../StyledComponents/Styled';
import { Menu } from '@material-ui/icons';
//import { Menu } from 'antd'
const NavBar = () => {
  const [nav, setNav] = useState(false);
  // const HideNav = () => {
  //   setNav(!nav);
  // }
  return (
    <NavStyle>
      <div className='menu'>
        <div className='men'  onClick={() => setNav(!nav) }>
        <Menu style={{fontSize:'30px'}}  />
        <h1>DOTMAN</h1>
        </div>
      </div>
      <div className={`${nav ? 'div': 'hide'}`}>
        <Link href='/'>
          <a>
            <p>Home</p>
          </a>
        </Link>
          <a href='#about'>
            <p>About Me</p>
          </a>
        <Link href='/'>
          <a>
            <p>CV</p>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <p>Gallery</p>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <p>Contact</p>
          </a>
        </Link>
      </div>
    </NavStyle>
  );
};

export default NavBar;
