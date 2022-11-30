import Link from 'next/link'
const yr = new Date().getFullYear();
const FooterBottom = () => {
  return (
    <>
      <div className="footer-copyright">
        Copyright © {yr} | CatsNotDoctors
      </div>
      <div className="footer-bottom-links">
        <a href="#">Privacy Policy</a> | <a href="#">Conditions or Terms</a>
      </div>
      <div className="social">
        <ul className='social-icons'>
          <li><a className='social-icon' href="#">F</a></li>
          <li><a className='social-icon' href="#">T</a></li>
          <li><a className='social-icon' href="#">in</a></li>
        </ul>
      </div>
    </>
  )
}
export default FooterBottom;