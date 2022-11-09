import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
  const { _id, serviceName, imgUrl, description, price } = service;

  return (
    <PhotoProvider>
      <PhotoView src={imgUrl}>
      <Card imgSrc={imgUrl}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {serviceName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description.length > 100
          ? `${description.slice(0, 100)}...`
          : description}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Price: {price}</p>
        <Link to={`/services/${_id}`}><Button >View Details</Button></Link>
      </div>
      </Card>
      </PhotoView>
      
    </PhotoProvider>
    
  );
};

export default ServiceCard;
