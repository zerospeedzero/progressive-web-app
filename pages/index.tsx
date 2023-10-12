import React, { useState, useEffect, useRef } from 'react'
import { ConnectWallet, MediaRenderer, Web3Button, useAddress, useContract, useContractMetadata} from "@thirdweb-dev/react";
import {motion} from 'framer-motion'
export default function Home() {
  const address = useAddress();
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
  const { data: contractMetadata } = useContractMetadata(contract);
  // console.log(contractMetadata)
  return (
    <div>
      {address ? (
        <div className='flex flex-col justify-center items-center'>
          <MediaRenderer
            src={contractMetadata?.image}
            width="40%"
            height="50%"
            style={{
              borderRadius: "20px",
              maxWidth: "500px",
            }}
          />
          <h1>{contractMetadata?.name}</h1>
          <Web3Button
            contractAddress={process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ''}
            action={(contract) => contract.erc1155.claim(0, 1)}
            onSuccess={() => alert("NFT Claimed!")}
            >
            Claim NFT
          </Web3Button>
        </div>
      ) : (
        <motion.div className="h-[80vh] flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <ConnectWallet className="testing" btnTitle="Login"/>
        </motion.div>
      )}
    </div>
  );
};

// export default Home;
