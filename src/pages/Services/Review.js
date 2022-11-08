import { Card } from "flowbite-react";
import React from "react";

const Review = ({ review }) => {
  console.log(review);
  const { customerReview, reviewerName, reviewerPhoto } = review;
  // const{}
  return (
    <Card className="mb-4">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {customerReview}
      </h5>
      <div className="flex items-center">
        <img src={reviewerPhoto} className="w-10 rounded-full" alt="" />
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {reviewerName}
        </p>
      </div>
    </Card>
  );
};

export default Review;
