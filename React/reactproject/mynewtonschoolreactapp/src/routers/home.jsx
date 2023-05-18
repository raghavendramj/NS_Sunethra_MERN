import { BrowserRouter, Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import Landing from "./landing";
import ContactUs from "./contactus";
import PageNotFound from "./pageNotFound";
import About from "./about";

function HomePage() {
    return (
        <div className="container m-5">
            <BrowserRouter>
                <ul className="nav">
                    <li className="nav-item"><NavLink className="nav-link" to="/home" style={(({ isActive }) => ({ color: isActive ? 'red' : 'black' }))}>Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/about" style={(({ isActive }) => ({ color: isActive ? 'red' : 'black' }))}>About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/landing" style={(({ isActive }) => ({ color: isActive ? 'red' : 'black' }))}>Landing</NavLink></li>
                    <li className="nav-item"><NavLink  className="nav-link" to="/contactus" style={(({ isActive }) => ({ color: isActive ? 'red' : 'black' }))}>ContactUs</NavLink></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/landing" element={<Landing />}></Route>
                    <Route path="/contactus" element={<ContactUs />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default HomePage;