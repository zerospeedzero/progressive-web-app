import { useValidDirectListings, useContract } from "@thirdweb-dev/react";
import NFTCard from './NFTCard';
import Link from 'next/link';
import { useState, useEffect, use } from "react";
import { motion } from 'framer-motion';
import Spinner from "./Spinner";
const marketAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;
const Listings = (props) => {
  const search = props.scope
  const [lists, setLists] = useState([]);
  const {contract} = useContract(marketAddress, "marketplace-v3");
  const { data, isLoading, error} = useValidDirectListings(contract);
  useEffect(()=> {setLists(data); console.log(data)},data)
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
          <div className="flex flex-col relative max-w-[60rem] items-center justify-center text-white pl-10 pr-10 pt-4 pb-4 mt-12 mx-auto">
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-lg -z-10'></div>
            <h3 className="text-xl mb-4">SAIT NMPD independent study colleciton</h3>
            <p>This represents an NFT collection created for an independent study by me. 33 graphic designs have been generated utilizing the state-of-the-art Stable Diffusion 2.1 text-to-image generation method within 10 minutes. ControlNet has been harnessed to impact the iterative U-NT denoising process, employing a facial vector image crafted through Adobe Illustrator. The resultant images have been shaped by this influence throughout the processing stages.</p>
          </div>
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