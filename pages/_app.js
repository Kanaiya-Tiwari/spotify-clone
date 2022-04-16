import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
// import { RecoilRoot } from "recoil";
// // export default MyApp
// import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     // `session` comes from `getServerSideProps` or `getInitialProps`.
//     // Avoids flickering/session loading on first load.
//     <SessionProvider session={session} refetchInterval={5 * 60}>
//       <RecoilRoot>
//       <Component {...pageProps} />
//       </RecoilRoot>
//     </SessionProvider>
//   )
// }

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;