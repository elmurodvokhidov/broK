import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from 'react-paginate';
import { Loader } from '../loader/Loader';
import { ContexData } from '../context/ContextDate';
import { BasicRating } from '../layouts/StarRating';

export function PaginateST() {

    const { allIinfo, likeFunc, basketFunc, eyeFunc, add_to_basket, add_to_favorite, value } = useContext(ContexData);

    // Loader State
    const [loading, setLoading] = useState(false);

    // Loader Timer
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(allIinfo.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allIinfo.length / itemsPerPage));
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, [itemOffset, itemsPerPage, allIinfo]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % allIinfo.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="paginateWrapper1">
                {
                    loading ? <Loader /> :
                    currentItems
                            .filter((item) => {
                                if (
                                    item.price > value[0] && item.price < value[1]
                                ) {
                                    return item;
                                }
                            }).map(val => (
                        <div className="A" key={val.id}>
                            <div className="bottomOneCard">
                                <div className="rasmBCAOne">
                                    <div className="modal">
                                        <div className="icons">
                                            <button className="iconBtn" onClick={() => add_to_favorite(val)}><span><AiOutlineHeart /></span></button>
                                            <button className="iconBtn" onClick={() => add_to_basket(val)}><span><SlBasket /></span></button>
                                            <button className="iconBtn" onClick={eyeFunc}><span><AiOutlineEye /></span></button>
                                        </div>
                                    </div>
                                    <figure><img src={val.img} alt={val.img} /></figure>
                                </div>
                                <p>{val.title}</p>
                                <div className="starUchun">
                                    <BasicRating />
                                </div>
                                <div className="pricesinA">
                                    <h3>${val.price}</h3>
                                    <span>${val.pre}</span>
                                    <p id="skidka">{val.skidka}% Off</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <ReactPaginate
                breakLabel="..."
                // nextLabel={<GrFormNext />}
                nextLabel=''
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                // previousLabel={<GrFormPrevious />}
                previousLabel=''
                renderOnZeroPageCount={null}
                containerClassName="pagination1"
                pageLinkClassName='pageNum'
                activeLinkClassName='active'
            />
        </>
    );
}