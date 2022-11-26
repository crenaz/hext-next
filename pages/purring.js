import Head from 'next/head'
import CardFeaturesPurring from '../components/elements/card-features-purring'
import ServicesPurring from '../components/elements/services-purring'
import Header from '../components/header/Header'
import PageHeader from '../components/header/page-header'
export default function Purring() {
  return (
    <>
      <Head>
        <title>Powerful Real Purring</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Powerful Real Purring" />
      </header>
      <main className='main'>
        <div className='container'>
          <ServicesPurring />
          <CardFeaturesPurring />
        </div>
      </main>
    </>
  )
}