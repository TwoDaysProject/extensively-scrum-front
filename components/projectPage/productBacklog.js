import React from 'react'
import styles from "/components/projects/projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListCheck, faBolt, faBug, faAdd
  } from "@fortawesome/free-solid-svg-icons";
import { color } from '@mui/system';
import Backlogitemcard from '../cards/backlogitemcard';


function ProductBacklog() {
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentheader}>
        <h1 className={styles.contenttitle}> Check all your epics, user stories and bugs in here !</h1>
        <button className={styles.btn}>
            <FontAwesomeIcon title='Add'
							    icon={faAdd}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "white", padding: "10px", paddingRight: "25px" }}
			    />
            <text> Add Backlog Item  </text>
        </button>
      </div>  
    
    
      <div className={styles.contentwrapper}> 
        <Backlogitemcard icon= {faListCheck} title ="Epic" />
        <Backlogitemcard icon= {faBolt} title ="User Story" />
        <Backlogitemcard icon= {faBug} title ="Bug" />
      </div>
    
    </div>
  )
}

export default ProductBacklog