import React from 'react'
import {ConnectWallet, useAddress} from "@thirdweb-dev/react"
import Image from 'next/image'
import Link from 'next/link' 
import { motion } from 'framer-motion'
import {FaRegHandPaper} from 'react-icons/fa' 
import {CgProfile} from 'react-icons/cg'
import {SiHiveBlockchain} from 'react-icons/si' 

const Navbar = () => {
  const address = useAddress()

  return (
    <motion.div className='fixed bottom-0 w-full p-4 flex justify-between items-center'>
      <Link className="flex flex-col justify-center items-center" href="/listings/all">
          <FaRegHandPaper size={46} /><p>MarketPlace</p>
      </Link>
      <Link className="flex flex-col justify-center items-center" href="/editiondrop">
          <SiHiveBlockchain size={46} /><p>NFT(s)</p>
      </Link>
      <div>
        {address ? (
            <ConnectWallet
                btnTitle="Login"
                detailsBtn={() => {
                    return (
                        <motion.div>
                            <CgProfile size={46} />
                            <p>Profile</p>
                        </motion.div>
                    )
                }}
            />
        ) : (
          <CgProfile size={46} />
        )}
      </div>

    </motion.div>
  )
}

export default Navbar