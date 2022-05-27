import React from 'react'
import Link from 'next/link'
import Navitem from './Navitem'
import Image from 'next/image'
import logo from '../../images/scrum2.png'

const MENU_LIST = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "Notifications",
        href: "/notifications"
    },
    {
        text: "Profile",
        href: "/profile"
    }
]

const Navbar = () => {
  return (
    <header className='navbarHeader'>
        <nav className='nav'>
            
            <Link href= {"/"}>
            <a>
                <div className='logo'>
                    <Image
                        src={logo}
                        alt="Logo"
                        width="40px"
                        height="40px"
                    />
                    <div> <h1 className='logotext'> Extensively Scrum </h1> </div>
                </div>
            </a>
            </Link>

            <div className='nav__menu-bar'>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className='nav__menu-list'>
                {
                    MENU_LIST.map( (menu, idx) => {
                        return (
                            <div key={menu.text}>
                                <Navitem {...menu} />
                            </div>
                        );
                    }) 
                }

            </div>
        </nav>
    </header>
  )
}

export default Navbar