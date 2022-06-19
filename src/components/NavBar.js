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
          <a>
            <p>Home</p>
          </a>
          <a href='#about'>
            <p>About Me</p>
          </a>
          <a>
            <p>CV</p>
          </a>
        <Link href='/'>
          <a href='#reward'>
            <p>Achievments</p>
          </a>
        </Link>
        <Link href='/'>
          <a href='#contacts'>
            <p>Contact</p>
          </a>
        </Link>
      </div>
    </NavStyle>
  );
};

export default NavBar;
