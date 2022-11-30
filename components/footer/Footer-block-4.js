import Link from 'next/link'
const FooterBlock4 = () => {
  return (
    <div className="footer-block">
      <ul>
        <li><Link href="/about">About Us</Link></li>
        <li><a href="#">KittyCenter</a></li>
        <li><a href="#">Knowledge</a></li>
        <li><a href="#">Client Area</a></li>
      </ul>
    </div>
  )
}
export default FooterBlock4;