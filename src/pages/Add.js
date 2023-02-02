import { useContext, useState } from "react"
import { ContexData } from "../context/ContextDate"

function Add() {
    const { backfunc, yangiP, setYangiP, yangiRef } = useContext(ContexData);

    const [inputData, setInputData] = useState({
        count: '',
        id: '',
        photo: '',
        title: '',
        price: '',
        prev: '',
        about: '',
        skidka: ''
    });

    function inputFunc(e) {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    // foto func
    function photoFunc(e) {
        setInputData({
            ...inputData,
            photo: URL.createObjectURL(e.target.files[0])
        })
    }

    // Add func
    function Add(e) {
        e.preventDefault();
        if (localStorage.getItem('yangiP')) {
            localStorage.setItem(
                'yangiP',
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem('yangiP')),
                    { ...inputData, id: new Date().getTime() }
                ])
            )
        } else {
            localStorage.setItem(
                'yangiP',
                JSON.stringify([{ ...inputData, id: new Date().getTime() }])
            )

        }
        console.log(yangiP);
        setInputData({
            count: '',
            photo: '',
            title: '',
            price: '',
            prev: '',
            about: '',
            skidka: ''
        })
        yangiRef();
    }

    // satate local
    return (
        <>
            <div className="crud">
            <button onClick={backfunc}>Home</button>
                <h1>Add your new Product</h1>
                <div className="add">
                    <form>
                        <input placeholder="Title" onInput={(e) => inputFunc(e)} id='title' name='title' value={inputData.title} type="text" />

                        <input placeholder="About" onInput={(e) => inputFunc(e)} id='about' name='about' value={inputData.about} type="text" />

                        <input placeholder="Count" onInput={(e) => inputFunc(e)} id='count' name='count' value={inputData.count} type="text" />

                        <input placeholder="Price" onInput={(e) => inputFunc(e)} id='price' name='price' value={inputData.price} type="number" />

                        <input type="number" placeholder="Skidka" onInput={(e) => inputFunc(e)} id='skidka' name='skidka' value={inputData.skidka} />

                        <input type="file" onInput={(e) => photoFunc(e)} id='photo' name='photo' />

                        <button onClick={Add} type="Submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Add