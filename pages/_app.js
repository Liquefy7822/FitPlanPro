import '@styles/globals.css'
import { ClerkProvider } from "@clerk/clerk-react";
import { ClerkLoaded } from "@clerk/clerk-react";
import { useRouter } from "next/router";


function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
