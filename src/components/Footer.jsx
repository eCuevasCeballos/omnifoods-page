import React from 'react';
import Logo from '../assets/omnifood-logo.png';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  const accounts = [
    {
      id: 1,
      item: 'Create account',
    },
    {
      id: 2,
      item: 'Sign in',
    },
    {
      id: 3,
      item: 'iOS app',
    },
    {
      id: 4,
      item: 'Android app',
    },
  ];

  const company = [
    {
      id: 1,
      item: 'About Omnifood',
    },
    {
      id: 2,
      item: 'For Business',
    },
    {
      id: 3,
      item: 'Cooking partners',
    },
    {
      id: 4,
      item: 'Careers',
    },
  ];

  const resources = [
    {
      id: 1,
      item: 'Recipe directory',
    },
    {
      id: 2,
      item: 'Help center',
    },
    {
      id: 3,
      item: 'Privacy & terms',
    },
  ];

  return (
    <footer className='text-sm md:text-xl sm:grid sm:grid-cols-2 md:gap-10 items-start justify-center border-t-2 border-light-gray p-3 h-auto pt-20 md:pt-10'>
      <div className='flex justify-center pb-4 md:pb-0 items-start md:justify-start gap-8 sm:col-start-2'>
        <div>
          <p className='font-bold mb-6'>Account</p>
          {accounts.map((accounts) => (
            <div className='flex flex-col'>
              <a key={accounts.id} href='#' className='mb-3 text-xs'>
                {accounts.item}
              </a>
            </div>
          ))}
        </div>
        <div>
          <p className='font-bold mb-6'>Company</p>
          {company.map((company) => (
            <div className='flex flex-col'>
              <a key={company.id} href='#' className='mb-3 text-xs'>
                {company.item}
              </a>
            </div>
          ))}
        </div>
        <div>
          <p className='font-bold mb-6'>Resources</p>
          {resources.map((resources) => (
            <div className='flex flex-col'>
              <a key={resources.id} href='#' className='mb-3 text-xs'>
                {resources.item}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center md:items-end sm:row-start-1'>
        <div className='flex items-center gap-8 pl-3'>
          <img src={Logo} alt='Omnifoods logo' className='h-4' />
          <p className='font-bold'>Contact us</p>
        </div>
        <div className='flex items-center justify-start gap-10 mt-8 pl-3'>
          <div className='flex text-gray gap-3'>
            <AiOutlineInstagram size={25} />
            <BsFacebook size={25} />
            <AiOutlineTwitter size={25} />
          </div>
          <p className='text-xs'>
            623 Harrison St., <br /> 2nd Floor, San
            <br />
            Francisco, CA 94107
          </p>
        </div>
        <div className='text-xs flex justify-start gap-10 my-10 pl-3'>
          <p>
            Copyright © 2023
            <br /> by Omnifood, Inc. <br /> All rights reserved.
            <p>
              Design by:{' '}
              <a
                href='https://twitter.com/jonasschmedtman'
                className='font-bold'
              >
                @jonasschmedtman
              </a>
            </p>
            <p>
              Code by:{' '}
              <a
                href='https://github.com/eCuevasCeballos'
                className='font-bold'
              >
                @eCuevasCeballos
              </a>
            </p>
          </p>
          <p>
            415-201-6370 <br /> hello@omnifood.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
