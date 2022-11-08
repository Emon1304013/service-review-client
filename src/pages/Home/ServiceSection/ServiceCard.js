import { Button, Card } from "flowbite-react";
import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, serviceName, imgUrl, description, price } = service;

  return (
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
        <Button>View Details</Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
