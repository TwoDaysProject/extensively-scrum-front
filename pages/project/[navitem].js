import { useRouter } from "next/router";
import Navbar from "/components/navbar/Navbar";
import LeftNavBar from "../../components/projectPage/leftnavbar";
import ProductBacklog from "../../components/projectPage/productBacklog";
import Sprints from "../../components/projectPage/sprints";
import Board from "../../components/projectPage/board";

const SpecificPage = () => {

    const router = useRouter()
    const path = router.query.navitem
    let CenterPage = ProductBacklog;
    if (path === "board") {
        CenterPage = Board;
    }
    else if (path === "sprints") {
        CenterPage = Sprints
    }
    else if (path === "productBacklog") {
        CenterPage = ProductBacklog
    }
    return (<div>
        <Navbar />
        <LeftNavBar />
        <CenterPage />
    </div>)
}

export default SpecificPage;