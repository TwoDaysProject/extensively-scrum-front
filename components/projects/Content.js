import React from 'react'
import styles from "./projects.module.css";
import Projectcard from '/components/cards/projectcard';


function Content() {
  return (
    <div className={styles.contentcontainer}>
        <h1 className={styles.contenttitle}> Your projects </h1>
        <div className={styles.contentwrapper}> 
            <Projectcard />
        </div>
        
    </div>
  )
}

export default Content