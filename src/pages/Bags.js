import { useContext } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { SlBasket } from "react-icons/sl";
import { ContexData } from "../context/ContextDate";
import { BasicRating } from "../layouts/StarRating";

function Bags() {
    const { bags, basketFunk, eyeFunc, add_to_basket, add_to_favorite } = useContext(ContexData);
    return (
        <>
            <div className="Bags">
                <section className="BagsOne">
                    {/* <div className="B_O_top">
                        <div className="textBOne">
                            <h1>
                                Super Flash Sale <br />
                                50% Off
                            </h1>
                        </div>
                    </div> */}
                    <div className="goodsInTheBags">
                        <div className="A">
                        {
                            bags.map(val => (
                                <div className="BCAOne">
                                    <div className="rasmBCAOne">
                                        <div className="modal">
                                            <div className="icons">
                                                <button className="iconBtn" onClick={() => add_to_favorite(val)}><span><FcLike /></span></button>
                                                <button className="iconBtn" onClick={() => add_to_basket(val)}><span><SlBasket /></span></button>
                                                <button className="iconBtn" onClick={eyeFunc}><span><AiOutlineEye/></span></button>
                                            </div>
                                        </div>
                                        <figure><img src={val.img} alt={val.img} /></figure>
                                    </div>
                                    <div className="text">
                                        <p>{val.title}</p>
                                        <div className="starUchun">
                                            <BasicRating />
                                        </div>
                                        <div className="alohida">
                                            <h1>{val.price}</h1>
                                            <p>{val.prev}</p>
                                            <h3>{val.skidka}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Bags;