import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'
import { easeInOut, motion } from 'framer-motion';

const NFTCard = ({listItem}) => {
  return (
    <motion.div className="relative flex h-[400px] w-[300px] cursor-pointer flex-col rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl "
      whileHover={{ scale: 1.05, transition: { duration: 0.1, ease: easeInOut }, backgroundColor: 'rgba(240,240,240,1)', boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.1)' }}
    >
      <div className="h-3/4 overflow-hidden">
        <Image className="rounded-t-lg object-cover p-4" src={listItem.asset.image} title={'Input for SD tokenization: ' + listItem.asset.description + ' \n\nCreator address: ' + listItem.creatorAddress + ' \n\nContract address: ' + listItem.assetContractAddress} height={340} width={340} alt='nft'/>
      </div>
      <div className="flex h-1/4 flex-col justify-between p-4 text-black">
        <div className="flex justify-between">
          <div>
            {listItem.asset.collection && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {listItem.asset?.collection?.name}
              </div>
            )}
            <div className ="text-sm font-bold">
              <span className='semi-bold'>Listing name:</span> {listItem.asset.name}
            </div>
          </div>
          <div className="flex flex-col items-end justify-center space-y-1">
            <div className="text-xs font-light">Buy at</div>
            <div className="flex items-center justify-end space-x-2">
              <Image height = {16} width= {16} src='/weth-logo.svg' alt='weth'/>
              <div className="">
                {/* Price is randomly generated since the initial price is set to zero for all the NFTs for demo purpose.*/}
                {listItem.currencyValuePerToken?.displayValue + 1  }
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <AiOutlineHeart className="h-3 w-3 text-gray-500 dark:text-gray-400"/>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {/* Like is randomly generated since I initially set this value to zero for all the NFTs for demo purpose.*/}
            {listItem.asset?.stats?.favorites ?? Math.round(Math.random() * 10)}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default NFTCard