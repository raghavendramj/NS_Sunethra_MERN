import { Link, useNavigate } from "react-router-dom";
import BasicForms from "../forms/BasicForms";
import NavLinkExample from "./navlinkExample";

function Landing() {

    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Welcome to Router Session</h1>
            {/* <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Landing</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contactus">Contact Us</Link>
                </li>
            </ul>
            <BasicForms /> */}

            <button className="btn btn-primary" onClick={() => navigate("/contactus")}>Contact Us!</button> 
        </div>
    );
}

export default Landing;