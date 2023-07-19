import React from 'react';
import Screen1 from '../assets/app-screen-1.png';
import Screen2 from '../assets/app-screen-2.png';
import Screen3 from '../assets/app-screen-3.png';
import Description1 from '../assets/screen-1-desc.json';
import Description2 from '../assets/screen-2-desc.json';
import Description3 from '../assets/screen-3-desc.json';
import Meal1 from '../assets/meal-1.jpg';
import Meal2 from '../assets/meal-2.jpg';
import { BsFire } from 'react-icons/bs';
import { IoRestaurantOutline } from 'react-icons/io5';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

const Hiw = () => {
  const steps = [
    {
      id: 1,
      img: Screen1,
      number: '01',
      step: 'Tell us what you like (and what not)',
      description: Description1,
    },
    {
      id: 2,
      img: Screen2,
      number: '02',
      step: 'Approve your weekly meal plan',
      description: Description2,
    },
    {
      id: 3,
      img: Screen3,
      number: '03',
      step: 'Receive meals at convenient time',
      description: Description3,
    },
  ];

  const meals = [
    {
      id: 1,
      img: Meal1,
      imgDescription: 'A picture of the dish Japanese Gyozas',
      dish: 'Japanese Gyozas',
      calories: '650',
      nutriScore: '74',
      rating: '4.9',
      rates: '537',
      labels: [1],
    },
    {
      id: 2,
      img: Meal2,
      imgDescription: 'A picture of the dish Avocado Salad',
      dish: 'Avocado Salad',
      calories: '400',
      nutriScore: '92',
      rating: '4.8',
      rates: '441',
      labels: [2, 3],
    },
  ];

  const labels = [
    {
      id: 1,
      type: 'vegetarian',
      color: 'bg-green',
    },
    {
      id: 2,
      type: 'vegan',
      color: 'bg-light-green',
    },
    {
      id: 3,
      type: 'paleo',
      color: 'bg-yellow',
    },
  ];

  const diets = [
    {
      id: 1,
      type: 'Vegetarian',
    },
    {
      id: 2,
      type: 'Vegan',
    },
    {
      id: 3,
      type: 'Pescatarian',
    },
    {
      id: 4,
      type: 'Gluten-free',
    },
    {
      id: 5,
      type: 'Lactose-free',
    },
    {
      id: 6,
      type: 'Keto',
    },
    {
      id: 7,
      type: 'Paleo',
    },
    {
      id: 8,
      type: 'Low FODMAP',
    },
    {
      id: 9,
      type: 'Kid-friendly',
    },
  ];
  return (
    <section
      className='pt-12 pb-8 px-4 md:px-0 xl:w-3/5 md:w-3/4 md:mx-auto'
      id='How it works'
    >
      <article>
        <span className='text-orange uppercase text-sm font-bold tracking-wider'>
          how it works
        </span>
        <h2 className='font-bold text-2xl text-dark-gray mb-14'>
          Your daily dose of health in 3 simple steps
        </h2>
        <div className='md:w-4/5 mx-auto'>
          {steps.map((step) => (
            <div className='grid items-center'>
              {step.id === 2 ? (
                <>
                  <div className='step-img sm:col-start-2 sm:row-start-1 flex'>
                    <img
                      key={step.id}
                      src={step.img}
                      alt='Mobile application sample screen'
                      className='w-2/6 mx-auto sm:col-start-2'
                    />
                  </div>
                  <div className='sm:col-start-1 sm:row-start-1'>
                    <h3 className='text-6xl font-bold text-light-gray'>
                      {step.number}
                    </h3>
                    <h4 className='font-bold text-xl pb-8'>{step.step}</h4>
                    <p className='text-justify pb-10'>{step.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className='step-img'>
                    <img
                      key={step.id}
                      src={step.img}
                      alt='Mobile application sample screen'
                      className='w-2/6 mx-auto'
                    />
                  </div>
                  <div className='sm:col-start-2'>
                    <h3 className='text-6xl font-bold text-light-gray'>
                      {step.number}
                    </h3>
                    <h4 className='font-bold text-xl pb-8'>{step.step}</h4>
                    <p className='text-justify pb-10'>{step.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </article>

      <article id='Meals' className='mt-10 md:w-full'>
        <span className='text-orange uppercase text-sm font-bold tracking-wider flex justify-center'>
          meals
        </span>
        <h2 className='font-bold text-2xl text-dark-gray text-center mb-10'>
          Omnifood AI chooses from 5,000+ recipes
        </h2>
        <div className='grid md:grid-cols-2 xl:grid-cols-3'>
          {meals.map((meals) => (
            <div className='rounded-xl mx-auto overflow-hidden shadow-2xl shadow-gray mb-10 w-4/5 xl:w-3/4 hover:transform hover:-translate-y-3 hover:transition-transform hover:duration-500'>
              <img key={meals.id} src={meals.img} alt={meals.imgDescription} />
              <div className='p-5 text-dark-gray'>
                <div className='flex gap-3'>
                  {meals.labels.map((labelId) => {
                    const label = labels.find((label) => label.id === labelId);
                    return (
                      <p
                        key={label.id}
                        className={`font-bold uppercase text-xs ${label.color} rounded-xl p-1`}
                      >
                        {label.type}
                      </p>
                    );
                  })}
                </div>
                <h3 className='font-bold text-xl my-3'>{meals.dish}</h3>
                <p className='flex gap-2 mb-2'>
                  <BsFire size={20} className='text-orange' />{' '}
                  <span className='font-bold'>{meals.calories}</span> calories
                </p>
                <p className='flex gap-2 mb-2'>
                  <IoRestaurantOutline size={20} className='text-orange' />{' '}
                  NutriScore ®{' '}
                  <span className='font-bold'>{meals.nutriScore}</span>
                </p>
                <p className='flex gap-2 mb-2'>
                  <AiOutlineStar size={20} className='text-orange' />{' '}
                  <span className='font-bold'>{meals.rating}</span> rating (
                  {meals.rates})
                </p>
              </div>
            </div>
          ))}

          <div className='mx-auto'>
            <h4 className='font-bold text-xl text-dark-gray mb-8'>
              Works with any diet!
            </h4>
            {diets.map((diets) => (
              <div className=''>
                <p key={diets.id} className='flex gap-3'>
                  <AiOutlineCheck size={20} className='text-orange' />
                  {diets.type}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='text-center my-8'>
          <a
            href='#'
            className='text-orange font-thin underline hover:no-underline'
          >
            See all recipes →
          </a>
        </div>
      </article>
    </section>
  );
};

export default Hiw;
