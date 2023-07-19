import React, { useState, useEffect } from 'react';
import TryHero from '../assets/try-hero.jpg';
import TryHeroDesktop from '../assets/try-hero-desktop.jpg';

const Try = () => {
  const [desktopScreen, setDesktopScreen] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setDesktopScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', checkDesktop);

    checkDesktop();

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <article
      className='bg-gradient-to-r from-light-orange-10 to-orange w-11/12 sm:w-10/12 xl:w-3/5 rounded-lg mx-auto overflow-hidden mb-20'
      id='Try for free'
    >
      <div className='md:flex h-full'>
        <div className='try-img flex-shrink-0'>
          <img
            src={desktopScreen ? TryHeroDesktop : TryHero}
            alt='Woman eating a salad'
            className={
              desktopScreen
                ? 'h-[32rem] w-auto object-cover'
                : 'h-full w-auto object-cover try--img'
            }
          />
        </div>
        <div className='flex-grow flex flex-col justify-center items-center p-5 md:justify-center md:items-center md:w-4/5 md:mx-auto'>
          <h2 className='font-bold text-3xl'>Get your first meal for free!</h2>
          <p className='p-6 text-justify'>
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>
          <div className='grid sm:grid-cols-1 gap-y-3 md:grid-cols-2 md:grid-rows-2 md:gap-2 text-xs'>
            <div className='flex flex-col'>
              {/* Full name */}
              <label htmlFor='name' className='font-bold'>
                Full name
              </label>
              <input
                type='text'
                id='name'
                placeholder='John Smith'
                className='form'
              />
            </div>
            <div className='flex flex-col'>
              {/* Email address */}
              <label htmlFor='email' className='font-bold'>
                Email address
              </label>
              <input
                type='email'
                id='email'
                placeholder='me@example.com'
                className='form'
              />
            </div>
            <div>
              {/* Selection */}
              <span className='font-bold'>Where did you hear from us?</span>
              <select name='platform' id='platform' className='form w-full'>
                <option>Please choose one option:</option>
                <option value='friends'>Friends and family</option>
                <option value='youtube'>YouTube video</option>
                <option value='podcast'>Podcast</option>
                <option value='ad'>Facebook ad</option>
                <option value='other'>Others</option>
              </select>
            </div>
            <div className='w-full flex items-end sm:mb-0'>
              <button className='text-white text-lg font-bold bg-brown p-2 w-full rounded-md hover:bg-white hover:text-black'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Try;
