import '@styles/globals.css'
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
