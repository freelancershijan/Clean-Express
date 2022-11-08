import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-phi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    console.log(services)
    return (

        <div className='mx-5 grid md:grid-cols-3 gap-5 md:mx-auto mt-8 lg:mt-16'>
            {
                services.slice(0, 3).map(service => <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img class="rounded-t-lg" src={service?.photo} alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{service?.name}</h5>
                        <p class="text-gray-700 text-base mb-4">
                            {service.description.slice(0, 200)}
                        </p>
                        <div className='flex justify-between items-center'>
                            <Link to='/services'>
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Get This Service</button>
                            </Link>
                            <div>
                                <h1 className='text-3xl font-semibold'>${service?.price}<span className='text-lg'>/mo</span></h1>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>

    );
};

export default ServicesSection;