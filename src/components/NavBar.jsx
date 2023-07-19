import React, { useEffect, useState } from 'react';
import Logo from '../assets/omnifood-logo.png';
import { BiMenu } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  /* Sections array */
  const sections = [
    {
      id: 1,
      section: 'How it works',
    },
    {
      id: 2,
      section: 'Meals',
    },
    {
      id: 3,
      section: 'Testimonials',
    },
    {
      id: 4,
      section: 'Pricing',
    },
    {
      id: 5,
      section: 'Try for free',
    },
  ];

  /* Adds class scrolled when navbar hits section 'how it works' */
  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.getElementById('How it works');
      const navBar = document.querySelector('nav');

      const sectionRect = targetSection.getBoundingClientRect();

      if (sectionRect.top <= 0) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    /* NavBar component */
    <nav className='p-5 bg-light-orange flex justify-between items-center fixed w-full z-10 xl:text-md'>
      {/* Omnifoods logo + scroll to 'home' section */}
      <Link to='Home' smooth duration={500} offset={-100}>
        <img
          src={Logo}
          alt='omnifoods logo'
          className='h-4 cursor-pointer xl:h-6'
        />
      </Link>
      {/* Sections array + scroll to every section */}
      <ul className='hidden md:flex md:self-end md:items-center'>
        {/* Iterates through the Sections array */}
        {sections.map((section, index) => (
          <li
            key={section.id}
            className={`px-6 cursor-pointer text-1xl capitalize font-bold hover:scale-110 duration-500s ${
              index === sections.length - 1
                ? 'bg-orange text-white p-2 rounded-lg'
                : 'hover:text-orange'
            }`}
          >
            {/* Smooth scroll */}
            <Link to={section.section} smooth duration={500} offset={-100}>
              {section.section}
            </Link>
          </li>
        ))}
      </ul>
      {/* Icons for mobile version */}
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
      >
        {/* Show icon for smaller screens */}
        {nav ? <FaTimes size={30} /> : <BiMenu size={30} />}
        {/* Change icon when is clicked */}
      </div>
      {/* Sections array for mobile version */}
      {nav && (
        <ul
          className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  
   bg-gradient-to-b from-white to-light-orange text-black'
        >
          {/* Iterates through the Sections array */}
          {sections.map((section, index) => (
            <li
              key={section.id}
              className={`px-4 cursor-pointer capitalize py-3 text-xl font-light items-center justify-center hover:scale-110 duration-300 hover:text-orange
      ${
        index === sections.length - 1
          ? 'bg-orange text-white rounded-lg'
          : 'hover:text-oranges'
      }`}
            >
              {/* Smooth scroll for mobile */}
              <Link
                onClick={() => setNav(!nav)}
                to={section.section}
                smooth
                duration={500}
                offset={-100}
              >
                {section.section}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
