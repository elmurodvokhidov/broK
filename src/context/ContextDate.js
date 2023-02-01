import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";

export const ContexData = React.createContext();

function ContextFunc({ children }) {

    const [bestSeller, setBestSeller] = useState([
        {
            count: 0, id: "best1", img: "./img/krosovka.png", title: "Nike Air Max 270 React", price: 43, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: "best2", img: "./img/image Product (4).png", title: "image Product (4).png", price: 93, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: "best3", img: "./img/image Product (7).png", title: "Nike Air Max 270 React", price: 23, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: "best4", img: "./img/image Product (3).png", title: "Nike Air Max 270 React", price: 34, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },

    ])
    const [bestSeller1, setBestSeller1] = useState([
        {
            count: 0, id: "best5", img: "./img/image Product (7).png", title: "Nike Air Max 270 React", price: 42, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: "best6", img: "./img/Product Picture02.png", title: "Nike Air Max 270 React", price: 55, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: "best7", img: "./img/image Product (4).png", title: "Nike Air Max 270 React", price: 12, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: "best8", img: "./img/Product Picture01.png", title: "Nike Air Max 270 React", price: 78, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
    ])
    const [bedtSeller2, setBestSeller2] = useState([
        {
            count: 0, id: 'best9', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 88, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: 'best10', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 35, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: 'best11', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 41, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: 'best12', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 91, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: 'best13', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 76, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: 'best14', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 18, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: 'best15', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 85, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: 'best16', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 22, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        },
        {
            count: 0, id: 'best17', img: "./img/qizilKrasovka.png", title: "Nike Air Max 270 React", price: 5, prev: "534.33", about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: "24",
        }
    ])
    const [bags, setBags] = useState([
        {
            count: 0, id: 'bags1', img: './img/bags.jpg', title: 'bags', price: 39.5, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, id: 'bags2', img: './img/bagsA.jpg', title: 'bags', price: 35, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, id: 'bags3', img: './img/bagsB.jpg', title: 'bags', price: 99, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, id: 'bags4', img: './img/bagsC.jpg', title: 'bags', price: 100, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, id: 'bags5', img: './img/bagsA.jpg', title: 'bags', price: 3, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, id: 'bags6', img: './img/bags.jpg', title: 'bags', price: 19, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, id: 'bags7', img: './img/bags.jpg', title: 'bags', price: 45, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, id: 'bags8', img: './img/bagsA.jpg', title: 'bags', price: 15, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, id: 'bags9', img: './img/bagsB.jpg', title: 'bags', price: 66, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, id: 'bags10', img: './img/bagsC.jpg', title: 'bags', price: 67, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
        {
            count: 0, id: 'bags11', img: './img/bags.jpg', title: 'bags', price: 70, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5',
        },
    ])
    const [sneakers, setSneakers] = useState([
        {
            count: 0, id: 'sneaker1', img: './img/krosovka.png', title: 'Sneaker', price: 45, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker2', img: './img/krosovka.png', title: 'Sneaker', price: 28, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker3', img: './img/krosovka.png', title: 'Sneaker', price: 15.5, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker4', img: './img/krosovka.png', title: 'Sneaker', price: 64, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker5', img: './img/krosovka.png', title: 'Sneaker', price: 55, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker6', img: './img/krosovka.png', title: 'Sneaker', price: 79, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker7', img: './img/krosovka.png', title: 'Sneaker', price: 99.5, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker8', img: './img/krosovka.png', title: 'Sneaker', price: 13, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker9', img: './img/krosovka.png', title: 'Sneaker', price: 43, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker10', img: './img/krosovka.png', title: 'Sneaker', price: 73, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker11', img: './img/krosovka.png', title: 'Sneaker', price: 65, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker12', img: './img/krosovka.png', title: 'Sneaker', price: 88, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker13', img: './img/krosovka.png', title: 'Sneaker', price: 94, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker14', img: './img/krosovka.png', title: 'Sneaker', price: 21.5, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker15', img: './img/krosovka.png', title: 'Sneaker', price: 33, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'sneaker16', img: './img/krosovka.png', title: 'Sneaker', price: 47, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        }
    ])
    const [belt, setBelt] = useState([
        {
            count: 0, id: 'belt1', img: './img/belt1.jpg', title: 'Belt', price: 22, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt2', img: './img/belt2.jpg', title: 'Belt', price: 43, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt3', img: './img/belt3.jpg', title: 'Belt', price: 55, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt4', img: './img/belt4.jpg', title: 'Belt', price: 76, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt5', img: './img/belt5.jpg', title: 'Belt', price: 87, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt6', img: './img/belt6.jpg', title: 'Belt', price: 56, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt7', img: './img/belt1.jpg', title: 'Belt', price: 45, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt8', img: './img/belt2.jpg', title: 'Belt', price: 43, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt9', img: './img/belt3.jpg', title: 'Belt', price: 23, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt10', img: './img/belt4.jpg', title: 'Belt', price: 78, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt11', img: './img/belt5.jpg', title: 'Belt', price: 75, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt12', img: './img/belt6.jpg', title: 'Belt', price: 45, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt13', img: './img/belt1.jpg', title: 'Belt', price: 34, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt14', img: './img/belt2.jpg', title: 'Belt', price: 56, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt15', img: './img/belt3.jpg', title: 'Belt', price: 23, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        },
        {
            count: 0, id: 'belt16', img: './img/belt4.jpg', title: 'Belt', price: 12, prev: '400', about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt fugit. Quo, quae quia similique quaerat quis ut optio! Non soluta odit corrupti magnam, dicta qui nobis aliquid mollitia ipsa obcaecati fugit! Nulla, fugiat aut!', skidka: '0.5'
        }
    ])
    // loader
    const [loader, setLoader] = useState(false);

    const [allIinfo, setAllIinfo] = useState([
        ...bestSeller, ...bestSeller1, ...bedtSeller2, ...bags
    ])
    // console.log(allIinfo);
    const [modalUchun, setModalUchun] = useState(false);
    const [goToState, setGoToState] = useState({
        goToFirst: true,
        goToSecond: false,
        goToThird: false,
    });
    const eyeLink = useNavigate();
    const basketLink = useNavigate();
    const favoriteLink = useNavigate();
    const addAcc = useNavigate();
    const backLink = useNavigate();
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

    // Price Range State
    const [value, setValue] = React.useState([0, 100]);

    // Basket malumotlari
    const [forLocal, setForLocal] = useState(
        JSON.parse(localStorage.getItem('forLocal')) ||
        []
    )

    // Favorite malumotlari
    const [forFavorite, setForFavorite] = useState(
        JSON.parse(localStorage.getItem('forFavorite')) ||
        []
    )

    function inputFunc(e) {
        setInputData({
            ...inputData,
            [e.target.count]: e.target.value
        })
    }

    // foto func
    function photoFunc(e) {
        setInputData({
            ...inputData,
            photo: URL.createObjectURL(e.target.filter[0])
        })
    }

    // Add func
    function Add(e) {
        e.preventDefault();
        if (localStorage.getItem('forLocal')) {
            localStorage.setItem(
                'forLocal',
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem('forLocal')),
                    { ...inputData, id: new Date().getTime() }
                ])
            )
        } else {
            localStorage.setItem(
                'forLocal',
                JSON.stringify([{ ...inputData, id: new Date().getTime() }])
            )

        }
    }

    // forLocal refresh funksiyasi
    function refresh() {
        setForLocal(
            JSON.parse(localStorage.getItem('forLocal')) || []
        )
    }

    // Favorite refresh funksiyasi
    function refresh1() {
        setForFavorite(
            JSON.parse(localStorage.getItem('forFavorite')) || []
        )
    }

    // Increment Function
    function incFunc(item) {
        localStorage.setItem(
            'forLocal',
            JSON.stringify(
                JSON.parse(localStorage.getItem('forLocal')).map(
                    biz => biz.id === item.id ?
                        { ...biz, count: biz.count + 1 } : biz
                )
            )
        )
        refresh();
    }

    // Decrement Function
    function decFunc(item) {
        localStorage.setItem(
            'forLocal',
            JSON.stringify(
                JSON.parse(localStorage.getItem('forLocal')).map(
                    biz => biz.id === item.id ?
                        { ...biz, count: biz.count - 1 } : biz
                )
            )
        )
        JSON.parse(localStorage.getItem('forLocal')).map(
            foo => foo.id === item.id && foo.count === 0 ?
                delete_to_basket(item) : foo
        )
        refresh();
    }

    // Bilmayman
    const [bilmadim, setBilmadim] = useState(
        JSON.parse(localStorage.getItem('bilmadimLocal'))
    )

    function refresh2() {
        setBilmadim(
            JSON.parse(localStorage.getItem('bilmadimLocal'))
        )
    }

    // bilmadimT
    function bilmadimT() {
        if (localStorage.getItem('bilmadimLocal') === 'true') {
            localStorage.setItem('bilmadimLocal', 'false')
        }
        // else {
        //     setBilmadim(
        //         localStorage.setItem('bilmadimLocal', 'true')
        //     )
        // }
        refresh2()
    }

    // bilmadimT
    function bilmadimF() {
        if (localStorage.getItem('bilmadimLocal') === 'false') {
            localStorage.setItem('bilmadimLocal', 'true')
        }
        // else {
        //     setBilmadim(
        //         localStorage.setItem('bilmadimLocal', 'false')
        //     )
        // }
        refresh2()
    }

    function modalFunc() {
        setModalUchun(true);
    }

    function modalClose() {
        setModalUchun(false);
    }

    // Go To Function
    function goToFunc() {
        if (goToState.goToFirst === true) {
            setGoToState({ ...goToState, goToFirst: false, goToSecond: true });
        }
        if (goToState.goToSecond === true) {
            setGoToState({ ...goToState, goToSecond: false, goToThird: true });
        }
        if (goToState.goToThird === true) {
            setGoToState({ ...goToState, goToThird: false, goToFirst: true });
            modalClose();
        }
    }

    // Back Function
    function modalBack() {
        if (goToState.goToFirst === true) {
            modalClose();
        }
        if (goToState.goToSecond === true) {
            setGoToState({ ...goToState, goToSecond: false, goToFirst: true });
        }
        if (goToState.goToThird === true) {
            setGoToState({ ...goToState, goToThird: false, goToSecond: true });
        }
    }

    // Basket Function
    function basketFunk() {
        basketLink('/basket')

    }

    // add to basket
    function add_to_basket(item) {
        if (localStorage.getItem('forLocal')) {
            localStorage.setItem(

                'forLocal',
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem('forLocal')),
                    { ...item, count: +item.count + 1 }
                ])
            )
        }
        else {
            localStorage.setItem(
                'forLocal',
                JSON.stringify([{ ...item }])
            );
        }
        basketLink('/basket');
        refresh();
    }

    // delet to basket
    function delete_to_basket(biz) {
        localStorage.setItem(
            'forLocal',
            JSON.stringify(
                JSON.parse(localStorage.getItem('forLocal')).filter(
                    (item) => item.id !== biz.id
                )
            )
        )
        refresh()
    }

    // Add to Favorite va Delete Favorite funksiyalari Basket bilan bir xilda shu joyga yoziladi


    // add to favorite
    function add_to_favorite(item) {
        if (localStorage.getItem('forFavorite')) {
            localStorage.setItem(

                'forFavorite',
                JSON.stringify([
                    ...JSON.parse(localStorage.getItem('forFavorite')),
                    { ...item, count: +item.count + 1 }
                ])
            )
        }
        else {
            localStorage.setItem(
                'forFavorite',
                JSON.stringify([{ ...item }])
            );
        }
        favoriteLink('/like');
        refresh1();
    }

    // delet to favorite
    function delete_to_favorite(biz) {
        localStorage.setItem(
            'forFavorite',
            JSON.stringify(
                JSON.parse(localStorage.getItem('forFavorite')).filter(
                    (item) => item.id !== biz.id
                )
            )
        )
        refresh1()
    }

    // Eye Function
    function eyeFunc() {
        eyeLink('/product')
    }

    // My Profile link
    function myProf() {
        addAcc('/crud')
    }

    // Back funck
    function backfunc() {
        backLink('/')
    }


    return (
        <ContexData.Provider value={{
            bestSeller,
            bestSeller1,
            modalUchun,
            modalFunc,
            modalClose,
            goToState,
            setGoToState,
            modalBack,
            goToFunc,
            basketLink,
            basketFunk,
            eyeLink,
            eyeFunc,
            bedtSeller2,
            bags,
            allIinfo,
            refresh,
            forLocal,
            setForLocal,
            add_to_basket,
            delete_to_basket,
            add_to_favorite,
            delete_to_favorite,
            favoriteLink,
            forFavorite,
            bilmadim,
            refresh2,
            loader,
            setLoader,
            sneakers,
            belt,
            incFunc,
            decFunc,
            backfunc,
            myProf,
            inputFunc,
            photoFunc,
            Add,
            inputData,
            bilmadimT,
            bilmadimF,
            value,
            setValue
        }}>
            {children}
        </ContexData.Provider>
    )
}

export default ContextFunc;