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
        <div className='flex-grow justify-center p-5 md:justify-center md:items-center pb-0'>
          <h2 className='font-bold text-3xl'>Get your first meal for free!</h2>
          <p className='pt-3 text-justify'>
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </p>
          <div className='grid'>
            <div className='pt-3'>
              {/* Full name */}
              <label htmlFor='name' className='flex flex-col'>
                <span className='font-bold'>Full name</span>
                <input
                  type='text'
                  name='name'
                  placeholder='John Smith'
                  className='form'
                />
              </label>
            </div>
            <div className='pt-3'>
              {/* Email address */}
              <label htmlFor='email' className='flex flex-col'>
                <span className='font-bold'>Full name</span>
                <input
                  type='email'
                  name='email'
                  placeholder='me@example.com'
                  className='form'
                />
              </label>
            </div>
            <div className='pt-3'>
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
            <div className='w-full flex items-center my-6'>
              <button className='text-white font-bold bg-brown p-2 w-full rounded-md'>
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
