import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostReview from "./PostReview";
import Review from "./Review";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  const [review,setReview] = useState([])
  const { _id, serviceName, imgUrl, description, price } = data;
  console.log(data);
  return (
    <div className="my-20">

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center content-center">
        <div>
          <img src={imgUrl} alt="" />
        </div>
        <div className="lg:mt-10">
            <h1 className="font-bold text-2xl lg:text-4xl font-serif my-4 lg:mb-10 text-center lg:text-left">{serviceName}</h1>
            <p className="text-md lg:text-xl w-2/3 mx-auto lg:mx-0 mb-10 text-gray-700">{description}</p>
            <p className="font-bold text-xl text-center lg:text-left">BDT {price}</p>
        </div>
      </div>

      <Review></Review>
      <PostReview></PostReview>
    </div>
  );
};

export default ServiceDetails;
