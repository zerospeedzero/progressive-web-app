import { useValidDirectListings, useContract } from "@thirdweb-dev/react";
import NFTCard from './NFTCard';
import Link from 'next/link';
import { useState, useEffect } from "react";
const marketAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;

// function GetLists() {
//   const {contract} = useContract(marketAddress, "marketplace-v3");
//   const { data, isLoading, error} = useValidDirectListings(contract);
//   if (!data) {return []}
//   return data
// }

const Listings = (props) => {
  const [lists, setLists] = useState([]);
  const {contract} = useContract(marketAddress, "marketplace-v3");
  const { data, isLoading, error} = useValidDirectListings(contract);
  const search = props.scope
  useEffect(()=> { 
    if (data != null) {setLists(data)}
  },data)
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
      {lists.length > 0 ? (
        <div className="mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-10 lg:grid-cols-3 xl:grid-cols-4 sxl:grid-cols-5">
        {lists.map((listItem, index)=> showItem(listItem) && (
          <div key={index}>
            <Link legacyBehavior href = {`/assets/${listItem.assetContractAddress}/${listItem.id}`}>
              <a><NFTCard listItem={listItem}/></a>
            </Link>
          </div>
        ))}
      </div>
      ) : (
        <div className="h-[calc(100vh-10rem)] flex flex-col items-center justify-center font-semibold text-gray-700">Loading NFT from BlockChain Network...</div>
      )}
    </>
  )
}

export default Listings