import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <>
            <h1>Error!</h1>
            <h3>The Page you are trying to find is not present!</h3>
            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Landing</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/contactus">Contact Us</Link>
                </li>
            </ul>
        </>
    );
}

export default PageNotFound;