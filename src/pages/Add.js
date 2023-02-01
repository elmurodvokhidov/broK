import { useContext } from "react"
import { ContexData } from "../context/ContextDate"

function Add() {
    const { inputFunc, photoFunc, Add, inputData } = useContext(ContexData);
    // satate local
    return (
        <>
            <div className="crud">
                <h1>Add your new Product</h1>
                <div className="add">
                    <form>
                        <input type="text" placeholder="Title" onInput={(e) => inputFunc(e)} id='title' name='title' />

                        <input type="text" placeholder="About" onInput={(e) => inputFunc(e)} id='about' name='about' />

                        <input type="text" placeholder="Count" onInput={(e) => inputFunc(e)} id='count' name='count' />

                        <input type="number" placeholder="Price" onInput={(e) => inputFunc(e)} id='price' name='price' />

                        <input type="number" placeholder="Skidka" onInput={(e) => inputFunc(e)} id='skidka' name='skidka' />

                        <input type="file" onInput={(e) => photoFunc(e)} id='photo' name='photo' />

                        <button onClick={Add} type="Submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Add