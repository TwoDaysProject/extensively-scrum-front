import React from 'react';
import styles from "/components/projects/projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListCheck, faEdit, faTrash, faBolt, faBug, faAdd
  } from "@fortawesome/free-solid-svg-icons";


function Backlogitemcard(props) { 

  return (
        <div className={styles.projecttab} onClick={() => location.href='#'} >
            <div className={styles.tableft}> 
                <FontAwesomeIcon title={props.title}
							    icon={props.icon}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#ED6400", padding: "10px", paddingRight: "25px" }}
			    />
                <div> 
                    <h2 className={styles.projecttitle}> Backlog Item title </h2>
                    <text> code </text>
                </div>
            </div>
            <div> 
                <FontAwesomeIcon
							    icon={faEdit}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
                <FontAwesomeIcon
							    icon={faTrash}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#ED6400", padding: "10px", paddingRight: "25px" }}
			    />
            </div>
        </div> 

  )
}

export default Backlogitemcard