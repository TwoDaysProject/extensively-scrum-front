import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faBell,
  } from "@fortawesome/free-solid-svg-icons";

const Navitem = ( {href, text, active} ) => {
    if ( text == "Home") {
        return (
            <Link href={href}>
                <a
                    className={`
                        nav__link ${active ? "active" : ""}
                    `}
                >
                        <FontAwesomeIcon icon= {faHome}
                        style={{ fontSize: 25, color: "white" }}/>      
                    {text}
                </a>
            </Link>
          );
    }
    else if ( text == "Notifications") {
        return (
            <Link href={href}>
                <a
                    className={`
                        nav__link ${active ? "active" : ""}
                    `}
                >
                        <FontAwesomeIcon icon= {faBell}
                        style={{ fontSize: 25, color: "white" }}/>      
                    {text}
                </a>
            </Link>
          );
    }
    else if ( text == "Profile") {
        return (
            <Link href={href}>
                <a
                    className={`
                        nav__link ${active ? "active" : ""}
                    `}
                >
                        <FontAwesomeIcon icon= {faUser}
                        style={{ fontSize: 25, color: "white" }}/>      
                        {text}
                </a>
            </Link>
          );
    }
};

export default Navitem