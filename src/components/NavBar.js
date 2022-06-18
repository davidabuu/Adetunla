import React from 'react'
import Link from 'next/link'
import { NavStyle } from '../../StyledComponents/Styled'
const NavBar = () => {
  return (
    <NavStyle>
        <ul>
            <Link href='/'>
            <a>
            <li>Home</li>
            </a>
            </Link>
            <Link href='/'>
            <a>
            <li>About Me</li>
            </a>
            </Link>
            <Link href='/'>
            <a>
            <li>CV</li>
            </a>
            </Link>
            <Link href='/'>
            <a>
            <li>Gallery</li>
            </a>
            </Link>
            <Link href='/'>
            <a>
            <li>Contact</li>
            </a>
            </Link>
        </ul>
    </NavStyle>
  )
}

export default NavBar