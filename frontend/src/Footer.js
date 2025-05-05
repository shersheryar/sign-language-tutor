import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithubSquare  } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='w-full  mx-auto mt-32 py-16  px-4 grid lg:grid-cols-3 gap-8 text-black bg-white'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#000000]'>REACT.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaTwitter size={30} />
            <FaGithubSquare size={30} />
            <FaLinkedin size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-bold text-black'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-black'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-black'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-bold text-black'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;