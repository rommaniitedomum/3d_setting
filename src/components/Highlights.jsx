import React from 'react'
import { rightImg, watchImg } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Videocarousel from './Videocarousel';

const Highlights = () => {
    useGSAP(() => {
        gsap.to("#title", {opacity: 1, y: 0});
        gsap.to(".link", {opacity: 1, y: 0, duration:1});
    },[]);
  return(  
  <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc-900'>
    <div className='screen-max-width'>
        <div className='mb-12 w-full items-end justify-between md:flex'>
            <h1 id="title" className='section-heading'>GEt the highlights</h1>
        
        <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
                Watch the film
                <img src={watchImg} alt="" />
            </p>
            <p>
                Watch the event
                <img src={rightImg} alt="" />
            </p>
        </div>
        </div>
        <Videocarousel/>
    </div>
    </section>
    );
};

export default Highlights