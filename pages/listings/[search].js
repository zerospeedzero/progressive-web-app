import { useAddress} from "@thirdweb-dev/react";
import Listings from "./../../components/Listings";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function() {
  const address = useAddress();
  console.log(address)
  const router = useRouter()
  const { search } = router.query
  useEffect(()=> {
    // if (!address) {router.push('/')}
  },address)
  return (
    <>
      <Listings search={search}/>
      <p>testing</p>
    </>
  )
}
