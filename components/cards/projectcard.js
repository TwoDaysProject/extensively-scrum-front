import React from 'react';
import styles from "/components/projects/projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
      faUser,
      faStar,
} from "@fortawesome/free-solid-svg-icons";
import { color } from '@mui/system';


function Projectcard() { 

  return (
    <div className={styles.projecttab} onClick={() => location.href='project/productBacklog'} >
                <div> 
                    <h2 className={styles.projecttitle}> Project Name </h2>
                    <text> ProjectdescriptionProctdescriptionProjectdesc</text>
                </div>
                <div> 
                    <ul className={styles.projectmembers}>
                        <li> 
                            <FontAwesomeIcon title='user name'
							    icon={faUser}
							    style={{ width: "25px", height: "25px", cursor: "pointer" ,
                                    color: "#00204A", cursor: "pointer" }}
						    />
                        </li>
                        <li> 
                            <FontAwesomeIcon title='user name'
							    icon={faUser}
							    style={{ width: "25px", height: "25px", cursor: "pointer" ,
                                    color: "#00204A", cursor: "pointer" }}
						    />
                        </li>
                        <li> 
                            <FontAwesomeIcon title='user name'
							    icon={faUser}
							    style={{ width: "25px", height: "25px", cursor: "pointer" ,
                                    color: "#00204A", cursor: "pointer" }}
						    />
                        </li>
                    </ul>
                </div>
            </div> 
  )
}

export default Projectcard