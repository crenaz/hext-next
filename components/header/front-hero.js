import Link from 'next/link'
const FrontHero = () => {
  return (
    <section className="section-front-hero">
      <div className="container">
        <div className="front-hero">
          <div className="front-hero-section front-hero-text">
            <h1>Cats are Not Doctors</h1>
            <p>These cats are not doctors, but do provide medicinal relief. There are no health benefits other than being happy around cats.</p>
            <p>These World-Class High performance Non-Medical Felines backed by enterprise level hardware and excellent 24/7 customer care.</p>
            <div className="flex-container">
              <Link href="/vps/kvm-vps"><a className="button button-primary">Green Button</a></Link>
              <Link href="/dedicated"><a className="button button-secondary">Blue Button</a></Link>
            </div>
          </div>{/* front-hero-text */}
          <div className="front-hero-section front-hero-image">
            <img className="hero-image" src="/images/CatDoctorMorris.jpg" alt="hero image" />
          </div>{/* front-hero-image */}
        </div>
      </div>
    </section>
  )
}
export default FrontHero;