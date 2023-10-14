import React, { useState, useEffect, useRef } from 'react'
import { ConnectWallet, MediaRenderer, Web3Button, useAddress, useContract, useContractMetadata} from "@thirdweb-dev/react";
import {motion} from 'framer-motion'
export default function Home() {
  const address = useAddress();
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
  const { data: contractMetadata } = useContractMetadata(contract);
  return (
    <>
      {address ? (
        <div className='flex flex-col w-screen h-[70vh] justify-center items-center px-4'>
          <motion.div className='flex flex-row justify-space items-center'
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay:0.2, duration: 1, ease: "easeInOut", type: "spring", bounce: 0.25 }}
          >
            {/* <img
              className='w-[300px] h-[300px] rounded-lg m-4 shadow-md'
              src={contractMetadata?.image}
              alt="SAIT NMP 2023 Alumni Edition Drop NFT"
            /> */}
            <MediaRenderer
              src={contractMetadata?.image}
              width="300"
              height="300"
              style={{
                borderRadius: "20px",
                padding: "1rem",
                boxShadow: "0 0 1rem rgba(0,0,0,0.7)", 
              }}
            />
            <MediaRenderer
          src={contractMetadata?.image}
          width="auto"
          height="60%"
          style={{
            borderRadius: "20px",
            maxWidth: "500px",
          }}
        />            
            <motion.div
              whileHover={{scale: 1.2, rotate: 360,transition: {duration: 0.2, ease: 'easeInOut'}}}
            >
              <Web3Button
                style={{fontSize: '1.4rem' , minWidth: '6rem', width: '6rem', height: '6rem', margin: '1rem' , padding: '1rem' ,backgroundColor: 'rgba(236,77,21,1)', color: 'white',  borderRadius: '50%', boxShadow: '0 0 1rem rgba(0,0,0,0.7)'}}
                contractAddress={process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ''}
                action={(contract) => contract.erc1155.claim(0, 1)}
                onSuccess={() => alert("NFT Claimed!")}
                onError={() => alert("Something went wrong!")}
                >
                Claim
              </Web3Button>
            </motion.div>
          </motion.div>
          <motion.div className="hidden sm:flex flex-col max-w-[60rem] items-center justify-center text-white pl-10 pr-10 mx-auto mt-[1rem] relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay:0.2, duration: 1, ease: "easeInOut", type: "spring", bounce: 0.25 }}
          >
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-lg -z-10'></div>
            <h3 className='text-white text-2xl p-4'>{contractMetadata?.name}</h3>
            <p className="text-white mb-4">Claiming the &quot;SAIT NMPD 2023 Alumni Edition Drop NFT&quot; is entirely free. If you have come across this website, it is likely that you are one of my classmates or instructors.</p>
            <p className="text-white mb-8">Please secure this NFT in your virtual wallet, linked to your preferred authentication method. This NFT may serve as a potential membership credential for our forthcoming alumni community. The possibilities are intriguing.</p>
          </motion.div>
        </div>
      ) : (
        <motion.div className="h-[80vh] text-white flex flex-col justify-center items-center pb-4 pl-4 pr-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div className='hidden lg:block mb-8 relative p-4 text-white'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-transparent sm:bg-black opacity-50 rounded-lg -z-10'></div>
            <h3 className='hidden sm:block text-2xl pb-4'>Welcome!</h3>
            <p className='hidden sm:block pb-4 md:w-[30rem]'>This Progressive Web Application (PWA) website is to deliver a native application-like experience through web-based technologies, ensuring compatibility across multiple platforms without being tethered to specific vendors, such as Apple&apos;s App Store or Google&apos;s Play Store.</p>
            <p className='hidden sm:block pb-4 md:w-[30rem]'>This website serves to eliminate barriers for users seeking to immerse themselves in the world of Web 3.0 Non-Fungible Tokens (NFTs) while providing visual design ownership verification via external Web 2.0 OAuth methods.</p>
            <p className='hidden sm:block pb-4 md:w-[30rem]'>AI technologies, including Stable Diffusion and ControlLet, are responsible for creating the safeguarded graphic designs.</p>
          </motion.div>
          <ConnectWallet
            style={{backgroundColor: 'rgba(236,77,21,1)', color: 'white', boxShadow: '0 0 1rem rgba(0,0,0,0.7)'}}
            btnTitle="Web 2.0 Login"
          />
        </motion.div>
      )}
    </>
  );
};