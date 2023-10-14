import { ThirdwebNftMedia, useAddress, useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import { motion } from "framer-motion";

type NFTProps = {
    nft: NFT;
    quantity: number;
};

export default function NFTCard({ nft, quantity }: NFTProps) {
    console.log(nft)
    return (
        <motion.div className="relative"
            initial={{ opacity: 0, scale: 0.1, rotate:0, }}
            animate={{ opacity: 1, scale: 1, rotate:360, }}
            transition={{ delay: 0.2, duration: 2, type: 'spring', stiffness: '30', ease: 'easeInOut' }}
        >
            {/* <ThirdwebNftMedia
                metadata={nft.metadata}
                width="100%"
                height="auto"
            /> */}
            <motion.img
                className="w-[400px] h-[400px] rounded-lg shadow-md"
                src={nft.metadata.image || ''}
                alt="name"
            />
            <p className="absolute bottom-4 left-4 bg-black p-1">{nft.metadata.name}</p>
            <p className="absolute bottom-4 right-4 bg-black p-1">QTY: {quantity}</p>
        </motion.div>
    )
};
