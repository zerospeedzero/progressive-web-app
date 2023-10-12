
import { useAddress} from "@thirdweb-dev/react";
import Listings from "./../../components/Listings";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Search() {
  const [search, setSearch] = useState('');
  const address = useAddress();
  const router = useRouter()
  console.log(address)
  useEffect(()=> {
     setSearch(router.query)
    if (!address) {router.push('/')}
  },[])
  // useEffect(()=> {
  // },address)
  return (
    <>
      <Listings search={search}/>
      <p>testing</p>
    </>
  )
}
