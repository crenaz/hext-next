import Link from 'next/link'
const FooterBlock3 = () => {
  return (
    <div className="footer-block">
      <ul>
        <li><Link href="/vps/kvm-vps">A very</Link></li>
        <li><Link href="/vps/managed-vps">silly</Link></li>
        <li><Link href="/vps/storage-vps">sort of</Link></li>
        <li><Link href="/dedicated">list</Link></li>
      </ul>
    </div>
  )
}
export default FooterBlock3;