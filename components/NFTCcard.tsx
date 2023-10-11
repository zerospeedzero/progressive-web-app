import { ThirdwebNftMedia, useAddress, useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
// import styles from "../styles/Home.module.css";
// import { NFT_CONTRACT_ADDRESS } from "../consts/addresses";

type NFTProps = {
    nft: NFT;
    quantity: number;
};

export default function NFTCard({ nft, quantity }: NFTProps) {

    return (
        <div >
            <ThirdwebNftMedia
                metadata={nft.metadata}
                width="100%"
                height="auto"
            />
            <div>
                <p>{nft.metadata.name}</p>
                <p>QTY: {quantity}</p>
            </div>
        </div>
    )
};
