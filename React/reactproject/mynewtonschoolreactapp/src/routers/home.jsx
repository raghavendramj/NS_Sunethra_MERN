import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import Landing from "./landing";
import ContactUs from "./contactus";
import PageNotFound from "./pageNotFound";

function HomePage() {
    return (
        <div className="container m-5">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/landing" element={<Landing />}></Route>
                    <Route path="/contactus" element={<ContactUs />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </BrowserRouter>  
        </div> 

    );
}

export default HomePage;