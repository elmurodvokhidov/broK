import { useContext } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { SlBasket } from "react-icons/sl";
import { ContexData } from "../context/ContextDate";
import { BasicRating } from "../layouts/StarRating";

function UserProduct() {
    const { add_to_favorite, add_to_basket, eyeFunc, yangiP } = useContext(ContexData);
    return (
        <>
            <div className="sneakers">
                <div className="cardsInSneakers">
                    <h1 className="gIBTitle">Sneakers</h1>
                    <div className="cardInSneakers">
                        {
                            yangiP.map(val => (
                                <div className="BCAOne" key={val.id}>
                                    <div className="rasmBCAOne">
                                        <div className="modal">
                                            <div className="icons">
                                                <button className="iconBtn" onClick={() => add_to_favorite(val)}><span><FcLike /></span></button>
                                                <button className="iconBtn" onClick={() => add_to_basket(val)}><span><SlBasket /></span></button>
                                                <button className="iconBtn" onClick={eyeFunc}><span><AiOutlineEye /></span></button>
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
                                            <h3>${val.price * (100 - val.skidka) / 100}</h3>
                                            <span>${val.price}</span>
                                            <p id="skidka">{val.skidka}% Off</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserProduct;