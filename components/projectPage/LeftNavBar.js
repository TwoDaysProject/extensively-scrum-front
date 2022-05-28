import React from 'react';
import styles from "/components/projects/projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTasksAlt, faColumns, faBarsProgress
  } from "@fortawesome/free-solid-svg-icons";


function LeftNavBar({setCurrentPage}) { 

  return (
    <div className={styles.navcontainer}>
        <div className={styles.navheader}>
            <h1> Project Name </h1> 
        </div>
        <div className={styles.navwrapper}> 
            <ul>
                <li>
					<FontAwesomeIcon
							icon={faTasksAlt}
							style={{ width: "22px", cursor: "pointer" }}
						/>{" "}
					<a href='/project/productBacklog'>Product Backlog</a>
				</li>
				<li>
					<FontAwesomeIcon
							icon={faColumns}
							style={{ width: "22px", cursor: "pointer" }}
						/>{" "}
					<a href="/project/board">Board </a>
				</li>
				<li>
					<FontAwesomeIcon
							icon={faBarsProgress}
							style={{ width: "22px", cursor: "pointer" }}
						/>{" "}
					<a href="/project/sprints">Sprints </a>
				</li>
            </ul>
        </div>
    </div>
  )
}

export default LeftNavBar