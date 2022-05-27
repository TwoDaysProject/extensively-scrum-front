import React from 'react';
import styles from "./projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAdd,
    faSearch,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";

function LeftNavBar() { 
  return (
    <div className={styles.navcontainer}>
        <div className={styles.navheader}>
            <h1> Hello User </h1> 
        </div>
        <div className={styles.navwrapper}> 
            <ul>
                <li>
					<FontAwesomeIcon
							icon={faAdd}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
					<a href="/addProject">Create Project</a>
				</li>
				<li>
					<FontAwesomeIcon
							icon={faSearch}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
					<a href="#">Search</a>
				</li>
				<li>
					<FontAwesomeIcon
							icon={faStar}
							style={{ width: "18px", cursor: "pointer" }}
						/>{" "}
					<a href="#">Starred Projects</a>
				</li>
            </ul>
        </div>
    </div>
  )
}

export default LeftNavBar