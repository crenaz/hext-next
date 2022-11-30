import Link from 'next/link'
const FooterBlock2 = () => {
  return (
    <div className="footer-block">
      <ul>
        <li><Link href="/hosting/web-hosting">Web</Link></li>
        <li><Link href="/hosting/reseller-hosting">Reseller</Link></li>
        <li><Link href="/hosting/wordpress-hosting">WordPress</Link></li>
        <li><Link href="/email">Email Hosting</Link></li>
      </ul>
    </div>
  )
}
export default FooterBlock2;