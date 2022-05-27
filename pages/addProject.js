import AddProjectContainer from "../components/addProject/AddProjectContainer";
import Image from "next/image"
import image from "../images/scrum1.png"
import Navbar from "../components/navbar/Navbar";

const AddProject = () => {

    return (<div id="addProjectPage">
        <Navbar/>
        <div className="retatedSideImage"><Image src={image}/></div>
        <AddProjectContainer/>
    </div>)
}

export default AddProject;