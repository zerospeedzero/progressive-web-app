import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
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
          <motion.div className='w-full flex justify-start items-center p-4'>
              <Image src={"/icon-192x192.png"} alt="" height={48} width={48}/>
              <p className='ml-4'>Progressive Web Application</p>
          </motion.div>
        </>
    )
};