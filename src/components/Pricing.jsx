import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { TfiInfinite } from 'react-icons/tfi';
import { CiApple } from 'react-icons/ci';
import { IoLeafOutline } from 'react-icons/io5';
import { AiOutlinePause } from 'react-icons/ai';

const Pricing = () => {
  const benefits = [
    {
      id: 1,
      icon: TfiInfinite,
      tittle: 'Never cook again!',
      description:
        'Our subscriptions cover 365 days per year, even including major holidays.',
    },
    {
      id: 2,
      icon: CiApple,
      tittle: 'Local and organic',
      description:
        'Our cooks only use local, fresh, and organic products to prepare your meals.',
    },
    {
      id: 3,
      icon: IoLeafOutline,
      tittle: 'No waste',
      description:
        'All our partners only use reusable containers to package all your meals.',
    },
    {
      id: 3,
      icon: AiOutlinePause,
      tittle: 'Pause anytime',
      description:
        'Going on vacation? Just pause your subscription, and we refund unused days.',
    },
  ];

  return (
    <section id='Pricing' className='xl:p-32'>
      <article className='p-8'>
        <div>
          <span className='font-bold text-sm text-orange tracking-wider uppercase'>
            Pricing
          </span>
          <h2 className='font-bold text-2xl mt-2 mb-8'>
            Eating well without breaking the bank
          </h2>
          <div className='sm:flex-row flex flex-col items-center gap-10 md:justify-center'>
            <div className='border-2 w-80 rounded-xl border-light-orange p-8 text-center'>
              <span className='font-bold text-sm text-orange tracking-wider uppercase'>
                Stater
              </span>
              <h4 className='font-bold text-5xl my-8'>
                <span className='text-xl'>$</span>399
              </h4>
              <p className='text-gray mb-8'>
                per month. That's just $13 per meal!
              </p>
              <p className='flex gap-3'>
                <AiOutlineCheck size={20} className='text-orange' /> 1 meal per
                day
              </p>
              <p className='flex gap-3'>
                <AiOutlineCheck size={20} className='text-orange' /> Order from
                11am to 9pm
              </p>
              <p className='flex gap-3'>
                <AiOutlineCheck size={20} className='text-orange' /> Delivery is
                free
              </p>
              <p className='flex gap-3 mb-8'>
                <AiOutlineClose size={20} className='text-orange' />
                Priority delivery
              </p>
              <button className='text-white font-bold bg-orange p-3 rounded-lg'>
                Start eating well
              </button>
            </div>
            <div className='bg-light-orange w-80 rounded-xl p-8 text-center complete-plan'>
              <span className='font-bold text-sm text-orange tracking-wider uppercase'>
                Complete
              </span>
              <h4 className='font-bold text-5xl my-8'>
                <span className='text-xl'>$</span>649
              </h4>
              <p className='text-gray mb-8'>
                per month. That's just $11 per meal!
              </p>
              <p className='flex gap-3'>
                <AiOutlineCheck size={20} className='text-orange' /> 2 meals per
                day
              </p>
              <p className='flex gap-3'>
                <AiOutlineCheck size={20} className='text-orange' /> Order 24/7
              </p>
              <p className='flex gap-3'>
                <AiOutlineCheck size={20} className='text-orange' /> Delivery is
                free
              </p>
              <p className='flex gap-3 mb-8'>
                <AiOutlineCheck size={20} className='text-orange' /> Priority
                delivery
              </p>
              <button className='text-white font-bold bg-orange p-3 rounded-lg'>
                Start eating well
              </button>
            </div>
          </div>
          <div>
            <p className='text-gray text-sm text-center my-10'>
              Prices include all applicable taxes. You can cancel at any time.
              Both plans include the following:
            </p>
            <div className='md:flex'>
              {benefits.map((benefits) => (
                <div className='flex flex-col md:items-center'>
                  <div className='text-orange bg-light-orange rounded-full w-16 h-16 justify-center flex items-center '>
                    <span key={benefits.id}>
                      {benefits.icon({ size: '40' })}
                    </span>
                  </div>
                  <h4 className='font-bold text-xl text-dark-gray mt-8 mb-2'>
                    {benefits.tittle}
                  </h4>
                  <p className='mb-8 text-justify md:w-3/4'>
                    {benefits.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Pricing;
