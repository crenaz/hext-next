import Image from 'next/image'
import Link from 'next/link'
const FooterBlock1 = () => {
  return (
    <div className="footer-block">
      <div className='site-logo'><Image className="logo" src="/images/kjhlogo.svg" width={187} height={80} alt="CatsNotDoctors" /></div>
      <p>
        CatsNotDoctors is a world class affordable cat hosting provider. We provide Secure, reliable and fast cat hosting with a 99.9% satisfaction guarantee <Link href="/about">Read more about us here, by clicking on this link</Link></p>
    </div>
  )
}
export default FooterBlock1;