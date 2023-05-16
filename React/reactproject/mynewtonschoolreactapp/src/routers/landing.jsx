import { Link } from "react-router-dom";
import BasicForms from "../forms/BasicForms";

function Landing() {
    return (
        <div className="container">
            <h1>Welcome to Router Session</h1>
            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Landing</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contactus">Contact Us</Link>
                </li>
            </ul>
            <BasicForms />
        </div>
    );
}

export default Landing;