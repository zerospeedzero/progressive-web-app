import type { AppProps } from "next/app";
import { ThirdwebProvider, metamaskWallet, paperWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Sepolia } from "@thirdweb-dev/chains";
import WAVES from 'vanta/dist/vanta.waves.min'
import { useState, useEffect, useRef } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current
      }))
    }
    return () => {
    }
  }, [vantaEffect])
  const walletConfig = paperWallet({
    paperClientId: process.env.NEXT_PUBLIC_PAPER_CLIENT_ID || ""   
  })
  const smartWalletConfig = smartWallet(walletConfig, {
    factoryAddress: process.env.NEXT_PUBLIC_FACTORY_ADDRESS || "",
    gasless: true,
  })
  return (
    <>
      <div ref={myRef} className="fixed w-full h-[100vh] -z-10"></div>
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
        activeChain={Sepolia}
        supportedWallets={[
          // metamaskWallet(),
          smartWalletConfig
        ]}
        >
        <Header/>
        <Component {...pageProps} />
        <Navbar />
      </ThirdwebProvider>
    </>
  );
}
export default MyApp;