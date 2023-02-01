import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { SlBasket } from 'react-icons/sl';
// import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ReactPaginate from 'react-paginate';
import { ContexData } from '../context/ContextDate';
import { BasicRating } from '../layouts/StarRating';

export function PaginateND() {

    const { allIinfo, likeFunc, basketFunc, eyeFunc, basketLink, add_to_basket, add_to_favorite } = useContext(ContexData);

    // Loader State
    const [loading, setLoading] = useState(false);

    // Loader Timer
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2500);
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
        }, 2500);
    }, [itemOffset, itemsPerPage, allIinfo]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % allIinfo.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="paginateWrapper2">
                {
                    loading ? 'loading...' :
                    currentItems.map(val => (
                        <div className="bottomTwoCardA">
                            <div className="left"><img src={val.img} alt={val.title} /></div>
                            <div className="right">
                                <h1>{val.title}</h1>
                                <div className="rightTop">
                                    <BasicRating />
                                    <span id="n_1R-T">0 reviews</span>
                                    <span id="n_2R-T">Submit a review</span>
                                </div>
                                <hr />
                                    <div className="pricesinA">
                                        <h3>${val.price}</h3>
                                        <span>${val.prev}</span>
                                        <p id="skidka">{val.skidka}% Off</p>
                                    </div>
                                    <div className="aboutinBottom-Two">
                                        <span>{val.about.length > 180 ? val.about.slice(0, 180) + '...' : val.about}</span>
                                    </div>
                                    <div className="rightBottom2">
                                        <button id="btnOneinR-B" onClick={() =>add_to_basket(val)}> <span><SlBasket /></span> Add To Cart</button> <button id="btnTwoinR-B" onClick={()=>add_to_favorite(val)}><FcLikePlaceholder/></button>
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