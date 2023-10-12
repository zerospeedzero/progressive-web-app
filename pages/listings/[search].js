
import { useAddress} from "@thirdweb-dev/react";
import Listings from "./../../components/Listings";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Search() {
  const address = useAddress();
  const router = useRouter()
  const scope = router.query.search
  if (!address) {router.push('/')}
  // useEffect(()=> { 
  // },[address])  
  return (
    <>
      <Listings scope={scope}/>
    </>
  )
}
