import React from 'react';

const Review = ({review}) => {
    console.log(review);
    const {customerReview} = review;
    // const{}
    return (
        <div className='my-10'>
            {customerReview}
        </div>
    );
};

export default Review;