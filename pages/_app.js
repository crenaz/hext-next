import Head from 'next/head'
import '../styles/style.css'
import Footer from '../components/footer/Footer'
import { Outfit, Roboto } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-outfit",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="change app description" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <div className={`${outfit.variable} ${roboto.variable}`}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}
export default MyApp
