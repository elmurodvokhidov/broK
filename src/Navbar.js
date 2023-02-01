import { Routes, Route, NavLink } from "react-router-dom";
import { AiFillCaretDown, AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import Home from "./pages/Home";
import Bags from "./pages/Bags";
import Sneakers from "./pages/Sneakers";
import Contact from "./pages/Contact";
import Product from "./Products/Product";
import Basket from "./pages/Basket";
import { Favorite } from "./pages/Favorite";
import Belt from "./pages/Belt";
import MyProfile from "./pages/MyProfile";
import Add from "./pages/Add";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navTop">
                    <div className="nTopLeft">
                        <button>EN<p><AiFillCaretDown /></p></button>
                        <button>USD<p><AiFillCaretDown /></p></button>
                    </div>
                    <div className="nTopRight">
                        <div className="myProfile">
                            <button>
                                <NavLink to='/myprofil'>
                                    <span id="myProf"><AiOutlineUser /></span>
                                    <span>My profile</span>
                                </NavLink>
                            </button>
                        </div>
                        <div className="basket"> <NavLink to="/basket"><span><SlBasket /></span></NavLink> </div>
                        <div className="items"><p> <NavLink to="/like"><span>like </span></NavLink> </p></div>
                        <div className="itogo"><input type="text" placeholder="$0.00" /><button><BiSearch /></button></div>

                    </div>
                </div>
                <div className="navBottom">
                    <div className="nBottomLeft">
                        <img src="./img/Icon (1).png" alt="" />
                        <h1>E-Comm</h1>
                    </div>
                    <div className="nBottomRight">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/bags">BAGS</NavLink>
                        <NavLink to="/sneakers">SNEAKERS</NavLink>
                        <NavLink to="/belt">BELT</NavLink>
                        <NavLink to="/contact">CONTACT</NavLink>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bags" element={<Bags />} />
                <Route path="/sneakers" element={<Sneakers />} />
                <Route path="/belt" element={<Belt />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product" element={<Product />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/like" element={<Favorite />} />
                <Route path="/myprofil" element={<MyProfile/>} />
                <Route path="/crud" element={<Add/>} />
            </Routes>
        </>
    )
}
export default Navbar