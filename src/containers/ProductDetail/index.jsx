import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FiBookOpen } from "react-icons/fi";
import { FaGooglePlay, FaPrint } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { BiBasket } from "react-icons/bi";
import { PiSmileySad } from "react-icons/pi";
import { removeHtmlTagsAndTruncate } from '../../helpers';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
const ProductDetail = () => {
  const params = useParams()
  const dispatch = useDispatch();
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
              onClick={() => {
                dispatch(
                  addToCart({
                    id: params.id,
                    title: bookDetailData.title,
                    price: bookDetailPrice.listPrice,
                    image:
                      bookDetailData.imageLinks &&
                      bookDetailData.imageLinks.thumbnail,
                  })
                );
              }}
              className={`flex ml-auto text-white ${
                priceVal
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-gray-500 pointer-events-none"
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