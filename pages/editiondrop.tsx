import React, { useEffect } from "react";
import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
// import { NFT_CONTRACT_ADDRESS } from "../consts/addresses";
import NFTCcard from "../components/NFTCcard";
import Router from "next/router";
export default function NFTs() {
    const address = useAddress();
    const router = Router;
    useEffect(()=> { 
        if (!address) {router.push('/')}
      },[address])  
    const {
        contract
    } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);

    const {
        data: ownedNFTs,
        isLoading: ownedNFTsLoading
    } = useOwnedNFTs(contract, address);

    return (
        <div >
            <h1>NFTs</h1>
            {ownedNFTsLoading ? (
                <p>Loading...</p>
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
        </div>
    )
};