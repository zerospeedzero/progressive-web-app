import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  useEffect(() => {
    const changeColor = () => {
      if(Number(window.scrollY) >= 40) {
        setColor('#000000')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor);
  }, [])

    return(
        <>
          <div className="fixed w-screen h-[7rem] z-10 opacity-80" style={{backgroundColor: `${color}`, color: `${textColor}`}}></div>
          <motion.div className='fixed w-full flex justify-start items-center p-4 z-10'
            initial={{ x: '48vw', y:'48vh'}}
            animate={{ x: '0', y:'0'}}
            transition={{ delay: 0.8, duration: 2, ease: 'easeInOut'}}
          >
            <Link className="cursor-pointer" href="/">
              <motion.img src={"/icon-512x512.png"} alt="" height={80} width={80}
                className='rounded-full cursor-pointer border-4 border-white shadow-md'
                initial={{ scale: 5 }}
                animate={{ scale: 1, rotate: 360 }}
                whileHover={{scale: 1.2, transition: {duration: 0.2, ease: 'easeInOut'}}}
                transition={{ delay: 0.8, duration: 2, type: 'spring', stiffness: '30', ease: 'easeInOut'}}
              />
            </Link>
            <motion.p className='text-white text-3xl  ml-4'
              initial={{ opacity: 0.6, y: '120vh', scale: 2 }}
              animate={{ opacity: 1, y:'0vw', scale: 1 }}
              transition={{ delay: 2, duration: 0.6, type: 'spring', stiffness: '30', ease: 'easeInOut' }}
            >
              Progressive Web Application
            </motion.p>
          </motion.div>
          <div className='h-[6.5rem]'></div>
        </>
    )
};