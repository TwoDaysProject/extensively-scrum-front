import AddProjectContainer from "../components/addProject/AddProjectContainer";
import Image from "next/image"
import image from "../images/scrum1.png"

const AddProject = () => {

    return (<div id="addProjectPage">
        <div className="retatedSideImage"><Image src={image}/></div>
        <AddProjectContainer/>
    </div>)
}

export default AddProject;