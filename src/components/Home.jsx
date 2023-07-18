import React from 'react';
import Customer1 from '../assets/customer-1.jpg';
import Customer2 from '../assets/customer-2.jpg';
import Customer3 from '../assets/customer-3.jpg';
import Customer4 from '../assets/customer-4.jpg';
import Customer5 from '../assets/customer-5.jpg';
import Customer6 from '../assets/customer-6.jpg';
import Hero from '../assets/hero.webp';
import Tech from '../assets/techcrunch.png';
import Business from '../assets/business-insider.png';
import NYtimes from '../assets/the-new-york-times.png';
import Forbes from '../assets/forbes.png';
import Usa from '../assets/usa-today.png';

const Home = () => {
  const imgDecoration =
    'rounded-full w-8 h-8 xl:h-11 xl:w-11 -mr-3 border-2 border-light-orange';

  return (
    <header className='bg-light-orange pt-20' id='home'>
      <div className='w-11/12 mx-auto mb-10 md:flex md:items-center md:justify-center'>
        <div className='md:p-10'>
          <h1 className='text-4xl font-bold text-dark-gray pb-8'>
            A healthy meal delivered to your door, every single day
          </h1>
          <p className='text-justify'>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>

          <div className='flex justify-center gap-5 w-5/6 mx-auto py-8'>
            <button className='text-white bg-orange font-bold rounded-lg cursor-pointer p-2'>
              Start eating well
            </button>
            <button className='text-dark-gray bg-white font-bold rounded-lg cursor-pointer p-3'>
              Learn more!
            </button>
          </div>
          <div className='flex items-center justify-center pb-5 mx-auto'>
            <div className='flex w-1/2 justify-center'>
              <img
                src={Customer1}
                alt='customer photo'
                className={`${imgDecoration}`}
              />
              <img
                src={Customer2}
                alt='customer photo'
                className={`${imgDecoration}`}
              />
              <img
                src={Customer3}
                alt='customer photo'
                className={`${imgDecoration}`}
              />
              <img
                src={Customer4}
                alt='customer photo'
                className={`${imgDecoration}`}
              />
              <img
                src={Customer5}
                alt='customer photo'
                className={`${imgDecoration}`}
              />
              <img
                src={Customer6}
                alt='customer photo'
                className={`${imgDecoration}`}
              />
            </div>
            <p className='text-dark-gray font-bold w-1/2'>
              <span className='text-orange'>250,000+</span> meals delivered last
              year!
            </p>
          </div>
        </div>
        <div className='justify-center flex'>
          <img
            src={Hero}
            alt='Woman enjoying food, meals in storage container, and food bowls on a table'
            className='md:w-5/6 md:h-auto'
          />
        </div>
      </div>
      <div className='bg-white m-auto w-full py-8'>
        <h2 className='uppercase text-gray text-center text-sm pb-8 tracking-wide'>
          as featured in
        </h2>
        <div className='flex justify-center h-3 md:h-6 gap-1 md:gap-8 brightness-0 opacity-50'>
          <img src={Tech} alt='Tech Crunch logo' />
          <img src={Business} alt='Business insider logo' />
          <img src={NYtimes} alt='The New York Times logo' />
          <img src={Forbes} alt='Forbes logo' />
          <img src={Usa} alt='USA Today logo' />
        </div>
      </div>
    </header>
  );
};

export default Home;
