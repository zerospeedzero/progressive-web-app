
import { useAddress} from "@thirdweb-dev/react";
import Listings from "./../../components/Listings";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Search() {
  const address = useAddress();
  const router = useRouter()
  const scope = router.query.search
  useEffect(()=> { 
    if (!address) {router.push('/')}
  },[address])  
  return (
    <>
      {address &&(<Listings scope={scope}/>)}
    </>
  )
}
