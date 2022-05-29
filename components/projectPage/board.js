import React, { useState } from 'react'
import styles from "/components/projects/projects.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit, faTrash,
  } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { Select, TextField } from '@mui/material';

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function Board() {
  const [showModal, setShowModal] = useState(false);

  const [formValues, setFormValues] = useState({name: "",status: ""})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentheader}>
        <h1 className={styles.contenttitle}> It seems impossible until it's done, So do it !</h1>
      </div>  
      <div class={styles.kanbanboard}>
            <div class={styles.kanbanblock} id={styles.todo} ondrop="drop(event)" ondragover="allowDrop(event)">
                <strong className={styles.title}>To Do</strong>
                <div class={styles.taskbuttonblock}>
                    <button onClick={()=> setShowModal(!showModal)} id={styles.taskbutton}> Add new ticket</button>
                </div>
                <div class={styles.task} id={styles.task1} draggable="true" ondragstart="drag(event)">
                    <span style={{ padding: "10px" }}> Ticket Name </span>
                    <div>
                        <FontAwesomeIcon
                                onClick={()=> setShowModal(!showModal)}
                                icon={faEdit}
                                style={{ width: "20px", height: "20px", cursor: "pointer" ,
                                color: "#00204A", padding: "10px"}}
			                   />
                        <FontAwesomeIcon
							                   icon={faTrash}
							                   style={{ width: "20px", height: "20px", cursor: "pointer" ,
                                color: "#ED6400", padding: "10px"}}
			                   />
                    </div>
                    <Modal className={styles.modal} toggle={() => setShowModal(!showModal)} isOpen={showModal}>
                      <div className={styles.modalheader}>
                      <h5 className={styles.modaltitle} id="exampleModalLabel">
                        Add / Edit ticket
                      </h5>
                    </div>
                    <ModalBody>
                        <TextField
                                style={{ width: "100%", backgroundColor: "white", marginTop: "30px"}}
                                id="ticketlabel-input"
                                name="name"
                                label="Ticket"
                                type="text"
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                          <select
                                style={{ width: "100%", height: "60px", backgroundColor: "white", marginTop: "50px"}}
                                id="ticketstatus-input"
                                name="status"
                                 >
                                <option value="ToDo">To Do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                          </select>  
                    </ModalBody>
                    <ModalFooter>
                      <Button className={styles.btnmodal}
                        id={styles.closebtnmodal}
                        color="secondary"
                        type="button"
                        onClick={() => setShowModal(!showModal)}
                      >
                        Close
                      </Button>
                      <Button className={styles.btnmodal} 
                        id={styles.savebtnmodal}
                        color="primary" type="button">
                        Save changes
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
            </div>
            <div class={styles.kanbanblock} id={styles.doing} ondrop="drop(event)" ondragover="allowDrop(event)">
                <strong className={styles.title}>Doing</strong>
                <div class={styles.taskbuttonblock}>
                    <button id={styles.taskbutton}>Add new ticket</button>
                </div>
            </div>
            <div class={styles.kanbanblock} id={styles.done} ondrop="drop(event)" ondragover="allowDrop(event)">
                <strong className={styles.title}>Done</strong>
                <div class={styles.taskbuttonblock}>
                    <button id={styles.taskbutton}>Add new ticket</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Board