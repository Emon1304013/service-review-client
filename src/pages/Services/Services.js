import React, { useEffect, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import ServiceCard from '../Home/ServiceSection/ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useTitle('Our Services')

    useEffect(()=> {
        fetch('https://roza-fusion-server.vercel.app/services')
        .then(res => res.json())
        .then(data => {setServices(data.data)})
        .catch(err => console.log(err))
      },[])
      console.log(services);
    return (
        <div className='my-10'>
            <h2 className='text-center text-2xl lg:text-4xl uppercase font-bold mb-8'>Services</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-10'>
                {
                    services?.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    >

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;