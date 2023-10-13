import React, { useState, useEffect, useRef } from 'react'
import { ConnectWallet, MediaRenderer, Web3Button, useAddress, useContract, useContractMetadata} from "@thirdweb-dev/react";
import {motion} from 'framer-motion'
export default function Home() {
  const address = useAddress();
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
  const { data: contractMetadata } = useContractMetadata(contract);
  console.log(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS )
  console.log(contract)
  return (
    <>
      {address ? (
        <div className='flex flex-col w-screen h-[80vh] justify-center items-center px-4'>
          <MediaRenderer
            className=''
            src={contractMetadata?.image}
            // width="40%"
            // height="50%"
            style={{
              // borderRadius: "20px",
              maxWidth: "500px",
              paddingBottom: "1rem"
            }}
          />
          <Web3Button
            contractAddress={process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ''}
            action={(contract) => contract.erc1155.claim(0, 1)}
            onSuccess={() => alert("NFT Claimed!")}
            onError={() => alert("Something went wrong!")}
          >
            Claim NFT
          </Web3Button>
          <div className="flex flex-col max-w-[60rem] items-center justify-center text-white pl-10 pr-10 mx-auto mt-[1rem] relative">
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-lg -z-10'></div>
            <h3 className='text-white text-2xl p-4'>{contractMetadata?.name}</h3>
            <p className="text-white mb-4">Claiming the &quot;SAIT NMPD 2023 Alumni Edition Drop NFT&quot; is entirely free. If you have come across this website, it is likely that you are one of my classmates or instructors.</p>
            <p className="text-white mb-8">Please secure this NFT in your virtual wallet, linked to your preferred authentication method. This NFT may serve as a potential membership credential for our forthcoming alumni community. The possibilities are intriguing.</p>
          </div>
        </div>
      ) : (
        <motion.div className="h-[80vh] text-white flex flex-col justify-center items-center pb-4 pl-4 pr-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div className='mb-8 relative p-4 text-white'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-transparent sm:bg-black opacity-50 rounded-lg -z-10'></div>
            <h3 className='hidden sm:block text-2xl pb-4'>Welcome!</h3>
            <p className='hidden sm:block pb-4 md:w-[30rem]'>This Progressive Web Application (PWA) website is to deliver a native application-like experience through web-based technologies, ensuring compatibility across multiple platforms without being tethered to specific vendors, such as Apple&apos;s App Store or Google&apos;s Play Store.</p>
            <p className='hidden sm:block pb-4 md:w-[30rem]'>This website serves to eliminate barriers for users seeking to immerse themselves in the world of Web 3.0 Non-Fungible Tokens (NFTs) while providing visual design ownership verification via external Web 2.0 authentication methods.</p>
            <p className='hidden sm:block pb-4 md:w-[30rem]'>AI technologies, including Stable Diffusion and ControlLet, are responsible for creating the safeguarded graphic designs.</p>
          </motion.div>
          <ConnectWallet 
            className=""
            btnTitle="Web 2.0 Login"
          />
        </motion.div>
      )}
    </>
  );
};

// export default Home;
