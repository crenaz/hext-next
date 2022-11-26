import Head from 'next/head'
import Header from '../../components/header/Header'
import PageHeader from '../../components/header/page-header'
import CardFeaturesHosting from '../../components/elements/card-features-purring'
import PriceOfPurrs from '../../components/elements/price-of-purrs'
import FaqHosting from '../../components/elements/faq/faq-hosting'
export default function WebHosting() {
  return (
    <>
      <Head>
        <title>Real Purring  | CatsNotDoctors</title>
      </Head>
      <header className="header header-page">
        <Header />
        <PageHeader title="Real Purring" />
      </header>
      <main className='main'>
        <div className='container'>
          <section className='section'>
            <PriceOfPurrs />
          </section>
          <CardFeaturesHosting />
          <section className='section'>
            <div className='section-title'><h2>Frequently Un-Asked Questions</h2></div>
            <FaqHosting />
          </section>
        </div>
      </main>
    </>
  )
}