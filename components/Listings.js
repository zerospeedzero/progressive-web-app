'use client';
import { useValidDirectListings, useContract } from "@thirdweb-dev/react";
import NFTCard from './NFTCard';
import Link from 'next/link';
import { useState, useEffect, use } from "react";
import { motion } from 'framer-motion';
import Spinner from "./Spinner";
const marketAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;
const Listings = (props) => {
  const search = props.scope
  const [lists, setLists] = useState();
  const {contract} = useContract(marketAddress, "marketplace-v3");
  // const { data, isLoading, error} = useValidDirectListings(contract);

  useEffect(()=> {
    const data = []
    for(let i = 1; i <= 33; i++){
      data.push({
        asset: {
          description: "Input for SD tokenization " + i,
          name: "IS-" + i,
          image: "/images/image-" + i + ".png",
          assetContractAddress: "0xf1FE1e075c8635BDa5a70B8141c4a2116c4C3566",
          // collection: {
          //   name: "Collection: IS" 
          // },
          stats: {
            favorites: '1'
          },
        },
        assetContractAddress: "0xf1FE1e075c8635BDa5a70B8141c4a2116c4C3566",
        creatorAddress: "0xDE1a78FAEdb314a8891dA2a4D66c76d015Eb538E",
        currencyValuePerToken: {
          displayValue: 0.001
        }
      })
    }
    setTimeout(() => {
      setLists(data); 
    }, 2000);
  },[])
  const showItem = (listItem) => {
    if (search != 'all' && search != null) {
      if (String(listItem.asset.description).toLowerCase().includes(search.toLowerCase()) ||
          String(listItem.asset.name).toLowerCase().includes(search.toLowerCase()) ||
          String(listItem.assetContractAddress).includes(search) 
         ) {
        return true
      } else {
        return false
      }
    }
    return true
  }
  return (
    <>
      {lists ? (
        <div className="pl-4 pr-4">
          <motion.div className="flex flex-col relative max-w-[60rem] items-center justify-center text-white pl-10 pr-10 pt-4 pb-4 mt-12 mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay:0.2, duration: 1, ease: "easeInOut", type: "spring", bounce: 0.25 }}
          >
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-lg -z-10'></div>
            <h3 className="text-xl mb-4">SAIT NMPD independent study collection</h3>
            <p>This represents an NFT collection created for an independent study by me. 33 graphic designs were generated using the state-of-the-art Stable Diffusion 2.1 text-to-image generation method within 10 minutes. ControlNet has been harnessed to impact the iterative U-NeT denoising process, employing a facial vector image crafted through Adobe Illustrator. This influence has shaped the resultant images throughout the processing stages.</p>
          </motion.div>
          <motion.div className="mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-10 lg:grid-cols-3 xl:grid-cols-4 sxl:grid-cols-5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", type: "spring", bounce: 0.25 }}        
            >
            {lists.map((listItem, index)=> showItem(listItem) && (
              <div key={index}>
                  <NFTCard listItem={listItem}/>
              </div>
            ))}
            <motion.div className="fixed bottom-0 left-0 right-0 h-[7rem] bg-black"
              initial={{ opacity:0.1 }}
              animate={{ opacity:0.8 }}
              transition={{delay: 0.1, duration: 3, ease: "easeInOut", type: "spring", bounce: 0.25 }}
              >
            </motion.div>
        </motion.div>
        <div className="h-[5rem]"></div>
      </div>
      ) : (
        <div>
          <Spinner message={"Loading NFTs from BlockChain Network..."}/>
        </div>
      )}
    </>
  )
}

export default Listings