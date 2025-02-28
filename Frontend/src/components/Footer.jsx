import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=''>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >

        <div>
            <img className='mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                 Welcome to the most affordable sales site.
                 Welcome to the most affordable sales site.
                 Welcome to the most affordable sales site.
                 Welcome to the most affordable sales site.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <Link to={'/place-order'}><li>Delivery</li></Link>
                <Link to={'/contact'}><li>Contact Us</li></Link>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+234-915-280-3191</li>
                <li>gbemiemmanuel555@gmail.com</li>
            </ul>
        </div>

      </div>

        <div>
          <hr />
          <p className='py-5 text-sm text-center'>
            Copyright 2025@ Endless.com - All Right Reserved.
          </p>
        </div>

    </div>
  )
}

export default Footer
