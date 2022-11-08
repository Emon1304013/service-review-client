import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  const [services,setServices] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/limitedServices')
    .then(res => res.json())
    .then(data => {setServices(data.data)})
    .catch(err => console.log(err))
  },[])
  console.log(services);
  return (
    <div className="mb-8">
      <h2 className="text-2xl lg:text-5xl text-center font-serif mb-8">
        Our Services
      </h2>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-8 ">
          {services.map(service => <ServiceCard
          key = {service._id}
          service = {service}
          ></ServiceCard>)}
        </div>
      </div>
      <Link to='/services'><Button className="my-8 mx-auto">View All</Button></Link>
    </div>
  );
};

export default ServiceSection;
