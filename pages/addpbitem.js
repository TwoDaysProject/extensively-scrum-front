import Image from "next/image"
import image from "/images/scrum1.png"
import Navbar from "/components/navbar/Navbar";
import AddpbitemContainer from "/components/addpbitem/addpbitemContainer";

const Addpbitem = () => {

    return (<div id="addpbitem">
        <Navbar/>
        <div className="retatedSideImage" ><Image src={image}/></div>
        <AddpbitemContainer />
    </div>)
}

export default Addpbitem;