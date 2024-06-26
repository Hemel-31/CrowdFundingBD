import "@/styles/globals.css";

import { NavBar,Footer,Card } from "@/Components";
import {CrowdFundingProvider} from "../Context/CrowdFundingContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CrowdFundingProvider>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </CrowdFundingProvider>
    </>
  );
}