import Head from 'next/head'
import Header from '../components/header/Header'
import FrontHero from '../components/header/front-hero'
import Services from '../components/elements/services'
import Features from '../components/elements/features'
import Cloudguy from '../components/elements/cloudguy'

export default function Home() {
  return (
    <>
      <Head>
        <title>CatsNotDoctors | Or we could make this about the "Living Cats"</title>
      </Head>
			<header className="header header-front">
				<Header />
			</header>
      <FrontHero />
      <main className='main'>
        <div className='container'>
          <Services />
          <Cloudguy />
          <Features />
        </div>
      </main>
    </>
  )
}
