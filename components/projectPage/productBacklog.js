import React from 'react'
import styles from "/components/projects/projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListCheck, faEdit, faTrash, faBolt, faBug, faAdd
  } from "@fortawesome/free-solid-svg-icons";
import { color } from '@mui/system';


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

        <div className={styles.projecttab} onClick={() => location.href='#'} >
            <div className={styles.tableft}> 
                <FontAwesomeIcon title='Epic'
							    icon={faListCheck}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
                <div> 
                    <h2 className={styles.projecttitle}> Backlog Item title </h2>
                    <text> code </text>
                </div>
            </div>
            <div> 
                <FontAwesomeIcon title='Epic'
							    icon={faEdit}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
                <FontAwesomeIcon title='Epic'
							    icon={faTrash}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
            </div>
        </div> 

        <div className={styles.projecttab} onClick={() => location.href='#'} >
            <div className={styles.tableft}> 
                <FontAwesomeIcon title='User Story'
							    icon={faBolt}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
                <div> 
                    <h2 className={styles.projecttitle}> Backlog Item title </h2>
                    <text> code </text>
                </div>
            </div>
            <div> 
                <FontAwesomeIcon title='Epic'
							    icon={faEdit}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
                <FontAwesomeIcon title='Epic'
							    icon={faTrash}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
            </div>
        </div>

        <div className={styles.projecttab} onClick={() => location.href='#'} >
            <div className={styles.tableft}> 
                <FontAwesomeIcon title='Bug'
							    icon={faBug}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
                <div> 
                    <h2 className={styles.projecttitle}> Backlog Item title </h2>
                    <text> code </text>
                </div>
            </div>
            <div> 
                <FontAwesomeIcon title='Epic'
							    icon={faEdit}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
                <FontAwesomeIcon title='Epic'
							    icon={faTrash}
							    style={{ width: "25px", height: "35px", cursor: "pointer" ,
                                    color: "#00204A", padding: "10px", paddingRight: "25px" }}
			    />
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default ProductBacklog