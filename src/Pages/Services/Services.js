import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hoocks/useTitle';
import Service from './Service/Service';
import SideBarBottom from './Service/SidebarBottom/SideBarBottom';
import SideBar from './SideBar/SideBar';

const Services = () => {
    const services = useLoaderData();
    useTitle('Services');
    console.log(services);
    return (
        <div className='grid md:grid-cols-4 md:mx-10 gap-10 '>
            <div>
                <div className='bg-gray-100 rounded-tr-3xl rounded-l-xl rounded-b-xl pb-10 my-10 lg:my-16 mx-5 md:mx-0'>
                    <h2 className='text-2xl mb-10 font-semibold bg-red-700 text-white p-3 text-center rounded-tl-xl rounded-tr-3xl'>Our Services</h2>

                    {
                        services.map(service => <SideBar key={service._id} service={service}></SideBar>)
                    }

                </div>
                <div className='mx-5 md:mx-0'>
                    <SideBarBottom></SideBarBottom>
                </div>
            </div>
            <div className='md:col-span-3'>
                <Service></Service>
            </div>
        </div>
    );
};

export default Services;