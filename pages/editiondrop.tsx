import React, { useEffect } from "react";
import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import NFTCcard from "../components/NFTCcard";
import Router from "next/router";
import { motion } from "framer-motion";
import Spinner from "../components/Spinner";

export default function NFTs() {
    const address = useAddress();
    const router = Router;
    useEffect(()=> { 
        if (!address) {router.push('/')}
      },[address])  
    const {contract} = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
    const {data: ownedNFTs, isLoading: ownedNFTsLoading} = useOwnedNFTs(contract, address);

    return (
        <motion.div className="h-screen w-screen text-white flex flex-col justify-center items-center">
            {!ownedNFTsLoading &&<h3 className="text-2xl mb-4">Your owned NFT(s)</h3>}
            {ownedNFTsLoading ? (
                <Spinner message={"Loading your owned NFT(s)"}/>
            ) : (
                ownedNFTs && ownedNFTs.length > 0 ? (
                    ownedNFTs.map((nft) => {
                        return (
                            <NFTCcard
                                key={nft.metadata.id}
                                nft={nft}
                                quantity={parseInt(nft.quantityOwned!)}
                            />
                        )
                    })
                ) : (
                    <p>No NFTs owned</p>
                )
            )}
            <div className="h-[14rem]"></div>
        </motion.div>
    )
};