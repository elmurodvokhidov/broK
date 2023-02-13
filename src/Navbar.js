import { Routes, Route, NavLink } from "react-router-dom";
import { AiFillCaretDown, AiFillCloseCircle, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { useContext } from "react";
import { ContexData } from "./context/ContextDate";

function Navbar() {

    const { forLocal, forFavorite } = useContext(ContexData);

    const [chiq, setChiq] = useState(false);

    return (
        <>
            <div className="mediaNavbar">
                <button className="hamburger" onClick={() => setChiq(true)}><span><HiMenu /></span></button>
                <div className="itogo"><input type="text" placeholder="$0.00" /><button><BiSearch /></button></div>
                <div className="nTopRight">
                    <div className="myProfileLink">
                        <button>
                            <NavLink to='/myprofil'>
                                <span id="myProf"><AiOutlineUser /></span>
                            </NavLink>
                        </button>
                    </div>
                    <div className="basket"><NavLink to="/basket"><span><SlBasket /></span></NavLink><span id="length">{forLocal.length}</span></div>
                    <div className="items"><NavLink to="/like"><span><AiOutlineHeart /></span></NavLink><span id="length">{forFavorite.length}</span></div>
                </div>
                {/* Sidebar */}
                {
                    chiq ?
                        <div className="sidebar" onClick={() => setChiq(false)}>
                            <div className="siderbarCont" onClick={(e) => e.stopPropagation()}>
                                <div className="sidebarTop">
                                    <div className="nBottomLeft">
                                        <img src="./img/Icon (1).png" alt="" />
                                        <h1>E-Comm</h1>
                                    </div>
                                    <button className="chiqish" onClick={() => setChiq(!chiq)}><span><AiFillCloseCircle /></span></button>
                                </div>
                                <div className="sidebarCenter">
                                    <NavLink to="/">HOME</NavLink>
                                    <NavLink to="/bags">BAGS</NavLink>
                                    <NavLink to="/sneakers">SNEAKERS</NavLink>
                                    <NavLink to="/belt">BELT</NavLink>
                                    <NavLink to="/contact">CONTACT</NavLink>
                                </div>
                                <div className="sidebarBottom">
                                    <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                                </div>
                            </div>
                        </div>
                        : ''
                }
            </div>

            <div className="navbar">
                <div className="navTop">
                    <div className="nTopLeft">
                        <button>USA / RUS</button>
                    </div>
                    <div className="nTopRight">
                        <div className="myProfileLink">
                            <button>
                                <NavLink to='/myprofil'>
                                    <span id="myProf"><AiOutlineUser /></span>
                                    <span>My profile</span>
                                </NavLink>
                            </button>
                        </div>
                        <div className="basket"> <NavLink to="/basket"><span><SlBasket /></span></NavLink><span id="length">{forLocal.length}</span></div>
                        <div className="items"><NavLink to="/like"><span><AiOutlineHeart /></span></NavLink><span id="length">{forFavorite.length}</span></div>
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
        </>
    )
}
export default Navbar