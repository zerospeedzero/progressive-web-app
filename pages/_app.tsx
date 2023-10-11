import type { AppProps } from "next/app";
import { ThirdwebProvider, paperWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
// const activeChain = "goerli";
// const activeChain = "Sepolia";
import { Sepolia } from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {
  const walletConfig = paperWallet({
    paperClientId: process.env.NEXT_PUBLIC_PAPER_CLIENT_ID || ""   
  })
  const smartWalletConfig = smartWallet(walletConfig, {
    factoryAddress: process.env.NEXT_PUBLIC_FACTORY_ADDRESS || "",
    gasless: true,
  })
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={Sepolia}
      supportedWallets={[
        smartWalletConfig
      ]}
    >
      <Header/>
      <Component {...pageProps} />
      <Navbar />
    </ThirdwebProvider>
  );
}
export default MyApp;