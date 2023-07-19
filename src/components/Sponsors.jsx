import React from 'react';
import Tech from '../assets/techcrunch.png';
import Business from '../assets/business-insider.png';
import NYtimes from '../assets/the-new-york-times.png';
import Forbes from '../assets/forbes.png';
import Usa from '../assets/usa-today.png';

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      img: Tech,
    },
    {
      id: 2,
      img: Business,
    },
    {
      id: 3,
      img: NYtimes,
    },
    {
      id: 4,
      img: Forbes,
    },
    {
      id: 5,
      img: Usa,
    },
  ];

  return (
    <article id='sponsors' className='py-4'>
      <p className='uppercase text-gray flex justify-center py-5'>
        as featured in
      </p>
      <div className='flex justify-center gap-3 mx-auto p-2 h-3 md:h-6 md:gap-8 md:w-4/5 xl:w-3/5'>
        {sponsors.map((sponsors) => (
          <div className='brightness-0 opacity-50'>
            <img key={sponsors.id} src={sponsors.img} alt='Sponsor logo' />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Sponsors;
