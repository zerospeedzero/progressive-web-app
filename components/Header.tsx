import React, { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current
      }))
    }
    return () => {
      // if (vantaEffect) vantaEffect.destroy
    }
  }, [vantaEffect])

    return(
        <>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
            async
            onLoad={() =>
              console.log(`script loaded correctly, window.FB has been populated`)
            }
          />
          <div className="fixed top-0 bottom-0 left-0 right-0 -z-10" ref={myRef} style={{height: "100vh"}}></div>
            <motion.div className='w-full flex justify-start items-center p-4'
              initial={{ x: '48vw', y:'48vh'}}
              animate={{ x: '0', y:'0'}}
              transition={{ delay: 0.8, duration: 2, type: 'spring', ease: 'easeInOut'}}
            >
                <Link href="/">
                  <motion.img src={"/icon-192x192.png"} alt="" height={56} width={56}
                    className='rounded-full cursor-pointer border-4 border-white shadow-md'
                    initial={{ scale: 5 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ delay: 0.8, duration: 2, type: 'spring', stiffness: '30', ease: 'easeInOut'}}
                  />
                </Link>
                <motion.p className='text-white text-2xl sm:text-3xl ml-4'
                  initial={{ opacity: 0.6, y: '120vh', scale: 2 }}
                  animate={{ opacity: 1, y:'0vw', scale: 1 }}
                  transition={{ delay: 2, duration: 0.6, type: 'spring', stiffness: '30', ease: 'easeInOut' }}
                >
                  Progressive Web Application
                </motion.p>
            </motion.div>
        </>
    )
};