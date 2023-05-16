import { Link } from "react-router-dom";
import FormWithMultipleFields from "../forms/FormWithMultipleFields";

function ContactUs() {
    return (
        <div className="container">
            <h1>Contact Us Page</h1>
            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Landing</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contactus">Contact Us</Link>
                </li>
            </ul>
            <FormWithMultipleFields />
        </div>
        
    );
}

export default ContactUs;