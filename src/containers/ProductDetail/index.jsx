import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FiBookOpen } from "react-icons/fi";
import { FaGooglePlay, FaPrint } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BiBasket } from "react-icons/bi";
import { PiSmileySad } from "react-icons/pi";

import { removeHtmlTagsAndTruncate } from '../../helpers';
const ProductDetail = (props) => {
  const params = useParams()
  const [bookDetailData, setBookDetailData] = useState([])
  const [bookDetailPrice, setBookDetailPrice] = useState([]);
   const priceVal =
     bookDetailPrice.listPrice && bookDetailPrice.listPrice.amount
       ? true
       : false;
  useEffect(() => {
   const fetchInitialDetailData = async () => {
     try {
       const res = await axios.get(
         `https://www.googleapis.com/books/v1/volumes/${params.id}`
       );
       setBookDetailData(res.data.volumeInfo);
       setBookDetailPrice(res.data.saleInfo);

     } catch (err) {
       console.log(err);
     }
   };

   fetchInitialDetailData();
 }, []);  
  console.log("bookDetailPrice", bookDetailPrice);
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          src={bookDetailData.imageLinks && bookDetailData.imageLinks.thumbnail}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            {bookDetailData.authors && bookDetailData.authors[0]}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {bookDetailData.title ?? ""}
          </h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <FiBookOpen color="#6B7280" size={24} />
              <span className="ml-2 font-semibold">
                Paper Count: {bookDetailData.pageCount ?? ""}
              </span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
              <a
                href={bookDetailData.infoLink ?? ""}
                target="_blank"
                className="text-gray-500"
              >
                <FaGooglePlay color="#6B7280" size={24} />
              </a>
            </span>
          </div>
          <p className="leading-relaxed">
            {removeHtmlTagsAndTruncate(bookDetailData.description ?? "")}
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div className="flex gap-2">
              <MdDateRange size={24} color="#6B7280" />
              <span className="ml-2 font-semibold underline">
                Published Date {bookDetailData.publishedDate ?? ""}
              </span>
              <FaPrint size={24} color="#6B7280" />
              <span className="ml-2 font-semibold underline">
                Publisher {bookDetailData.publisher ?? ""}
              </span>
            </div>
            {/* <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div> */}
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">
              {`${
                bookDetailPrice.listPrice && bookDetailPrice.listPrice.amount
                  ? bookDetailPrice.listPrice.amount + " TL"
                  : ""
              }`}
            </span>
            <button
              className={`flex ml-auto text-white ${
                priceVal ? "bg-red-500 hover:bg-red-600" : "bg-gray-500 pointer-events-none"
              }  border-0 py-2 px-6 focus:outline-none rounded`}
            >
              {priceVal ? (
                <>
                  <BiBasket size={24} />{" "}
                  <span className="ml-2">Add To Cart</span>
                </>
              ) : (
                <>
                  <PiSmileySad size={24} />
                  <span className="ml-2">Out Of Stock</span>
                </>
              )}
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail