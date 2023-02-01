import { useContext } from "react"
import { AiOutlineEye } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
import { SlBasket } from "react-icons/sl"
import { ContexData } from "../context/ContextDate"
import { BasicRating } from "../layouts/StarRating"

function Belt() {
    const { belt,add_to_favorite,add_to_basket,eyeFunc } = useContext(ContexData)
    return(
        <>
        <div className="belt">
        <div className="cardsInSneakers">
                    <div className="cardInSneakers">
                    {
                        belt.map(val => (
                            <div className="BCAOne">
                                <div className="rasmBCAOne">
                                    <div className="modal">
                                        <div className="icons">
                                            <button className="iconBtn" onClick={() => add_to_favorite(val)}><span><FcLike/></span></button>
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
        </div>
        </>
    )
}
export default Belt