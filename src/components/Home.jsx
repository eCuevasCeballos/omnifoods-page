import React from 'react';
import Customer1 from '../assets/customer-1.jpg';
import Customer2 from '../assets/customer-2.jpg';
import Customer3 from '../assets/customer-3.jpg';
import Customer4 from '../assets/customer-4.jpg';
import Customer5 from '../assets/customer-5.jpg';
import Customer6 from '../assets/customer-6.jpg';
import Hero from '../assets/hero.webp';

const Home = () => {
  const customers = [
    {
      id: 1,
      img: Customer1,
    },
    {
      id: 2,
      img: Customer2,
    },
    {
      id: 3,
      img: Customer3,
    },
    {
      id: 4,
      img: Customer4,
    },
    {
      id: 5,
      img: Customer5,
    },
    {
      id: 6,
      img: Customer6,
    },
  ];

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header id='Home' className='bg-light-orange p-6'>
      <section className='grid gap-5 items-center justify-center md:grid-cols-2 md:w-9/12 md:mx-auto pt-12 md:pt-32'>
        <div className='flex flex-col gap-y-10'>
          {/* Text / column 1 */}
          <h1 className='text-4xl xl:text-6xl font-bold text text-center md:text-start'>
            A healthy meal delivered to your door, every single day
          </h1>
          <p className='md:text-2xl text-center md:text-start'>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <div className='flex gap-4 mx-auto md:mx-0'>
            <button className='bg-orange rounded-xl p-2 font-bold text-white'>
              Start eating well
            </button>
            <button
              className='bg-white border-2 border-white rounded-xl p-3 font-bold text-black  hover:bg-light-orange'
              onClick={() => scrollToSection('sponsors')}
            >
              Learn more!
            </button>
          </div>
          <div className='flex flex-col xl:flex-row gap-5 items-center justify-center md:justify-start'>
            <div className='flex'>
              {customers.map((customers, index) => (
                <img
                  key={customers.id}
                  src={customers.img}
                  alt='Random customer picture'
                  className={`rounded-full border-2 md:w-12 md:h-12 w-9 h-9 border-light-orange  overflow-clip ${
                    index === 0 ? '' : '-ml-3'
                  } `}
                />
              ))}
            </div>
            <div className='max-w-full h-auto'>
              <p className='font-bold md:text-sm text-center'>
                <span className='text-orange'>250,000+</span> meals delivered
                last year
              </p>
            </div>
          </div>
        </div>
        <div>
          {/* Image column 2 */}
          <img src={Hero} alt='Various pictures grouped together' />
        </div>
      </section>
    </header>
  );
};

export default Home;
