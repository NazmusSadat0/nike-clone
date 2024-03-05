import React from 'react'
import {services} from '../constants'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
  return (
        <div className='max-container flex justify-center ml-20'>
            {services.map((service) => (
                <ServiceCard key={service.label} {...service}/>
            ))}
        </div>
  )
}

export default Services