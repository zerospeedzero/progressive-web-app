import { useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
// import { NFT_CONTRACT_ADDRESS } from "../consts/addresses";
import NFTCard from "../components/NFTCcard.tsx";

export default function NFTs() {
    const address = useAddress();

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
                            <NFTCard
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