import { Button, Spinner } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useTitle } from '../../hooks/useTitle';
import ServiceCard from '../Home/ServiceSection/ServiceCard';

const Services = () => {
    const { setLoading,loading } = useContext(AuthContext)
    const [services,setServices] = useState([]);
    useTitle('Services')

    useEffect(()=> {
        setLoading(true)
        fetch('https://roza-fusion-server.vercel.app/services')
        .then(res => res.json())
        .then(data => {
            setServices(data.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
      },[setLoading])
      console.log(services);
    return (
        
        <div className='my-10'>
            <h2 className='text-center text-2xl lg:text-4xl uppercase font-bold mb-8'>Services</h2>

            {
                (loading) && 
                      <Button className="w-2/12 mx-auto my-10">
                        <Spinner aria-label="Spinner button example" />
                        <span className="pl-3">Loading...</span>
                      </Button>
                  
            }

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