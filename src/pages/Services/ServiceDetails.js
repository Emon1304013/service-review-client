import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostReview from "./PostReview";
import Review from "./Review";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  const [reviews,setReviews] = useState([])
  const [refresh,setRefresh] = useState(false)
  const { _id, serviceName, imgUrl, description, price } = data;
  useEffect(()=>{
    fetch(`http://localhost:5000/reviews/${_id}`)
    .then(res => res.json())
    .then(data => setReviews(data.data))
    .catch(err => console.log(err))
  },[_id,refresh])
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

      <h2 className='text-center text-2xl font-bold'>Customer Reviews</h2>

      {
        reviews?.map(review => <Review
        key={review._id}
        review = {review}
        ></Review>)
      }
      <PostReview 
      serviceId={_id}
      refresh={refresh}
      setRefresh={setRefresh}></PostReview>
    </div>
  );
};

export default ServiceDetails;
