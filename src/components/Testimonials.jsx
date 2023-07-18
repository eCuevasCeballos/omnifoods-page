import React from 'react';
import Customer1 from '../assets/dave.jpg';
import Customer2 from '../assets/ben.jpg';
import Customer3 from '../assets/steve.jpg';
import Customer4 from '../assets/hannah.jpg';
import Testimonial1 from '../assets/testimonial-1.json';
import Testimonial2 from '../assets/testimonial-2.json';
import Testimonial3 from '../assets/testimonial-3.json';
import Testimonial4 from '../assets/testimonial-4.json';
import Gallery1 from '../assets/gallery-1.jpg';
import Gallery2 from '../assets/gallery-2.jpg';
import Gallery3 from '../assets/gallery-3.jpg';
import Gallery4 from '../assets/gallery-4.jpg';
import Gallery5 from '../assets/gallery-5.jpg';
import Gallery6 from '../assets/gallery-6.jpg';
import Gallery7 from '../assets/gallery-7.jpg';
import Gallery8 from '../assets/gallery-8.jpg';
import Gallery9 from '../assets/gallery-9.jpg';
import Gallery10 from '../assets/gallery-10.jpg';
import Gallery11 from '../assets/gallery-11.jpg';
import Gallery12 from '../assets/gallery-12.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      img: Customer1,
      comment: Testimonial1,
      name: 'Dave Bryson',
    },
    {
      id: 2,
      img: Customer2,
      comment: Testimonial2,
      name: 'Ben Hadley',
    },
    {
      id: 3,
      img: Customer3,
      comment: Testimonial3,
      name: 'Steve Miller',
    },
    {
      id: 4,
      img: Customer4,
      comment: Testimonial4,
      name: 'Hannah Smith',
    },
  ];

  const gallery = [
    {
      id: 1,
      img: Gallery1,
    },
    {
      id: 2,
      img: Gallery2,
    },
    {
      id: 3,
      img: Gallery3,
    },
    {
      id: 4,
      img: Gallery4,
    },
    {
      id: 5,
      img: Gallery5,
    },
    {
      id: 6,
      img: Gallery6,
    },
    {
      id: 7,
      img: Gallery7,
    },
    {
      id: 8,
      img: Gallery8,
    },
    {
      id: 9,
      img: Gallery9,
    },
    {
      id: 10,
      img: Gallery10,
    },
    {
      id: 11,
      img: Gallery11,
    },
    {
      id: 12,
      img: Gallery12,
    },
  ];

  return (
    <section className='bg-light-orange xl:flex' id='Testimonials'>
      <div className='p-8 my-auto'>
        <span className='font-bold text-sm text-orange tracking-wider uppercase'>
          Testimonials
        </span>
        <h2 className='font-bold text-2xl mb-10'>
          Once you try it, you can't go back
        </h2>
        <div className='grid md:grid-cols-2 md:grid-rows-2'>
          {testimonials.map((testimonials) => (
            <div className=' text-sm text-dark-gray'>
              <img
                key={testimonials.id}
                src={testimonials.img}
                alt='Customer picture'
                className='rounded-full w-14 mb-3'
              />
              <p className='mb-4'>{testimonials.comment}</p>
              <p className='mb-6'>- {testimonials.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-4 grid-rows-3 w-full p-3 gap-2'>
        {gallery.map((gallery) => (
          <div>
            <img
              key={gallery.id}
              src={gallery.img}
              alt='Gallery sample picture'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
