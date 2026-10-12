import Image from "next/image";

const cloudguy = () => {
  return (
    <div className="section">
      <div className="flex-container">
        <div className="flex-item">
          <Image src="/images/working-user.svg" alt="working-user" />
        </div>
        <div className="flex-item">
          <h2>There&apos;s a guy here</h2>
          <h3>sitting on a cloud or something</h3>
          <ul className="flex-column">
            <li>Not sure why</li>
            <li>Doesn&apos;t really make sense</li>
            <li>Free guesses</li>
            <li>Certificate of Ambiguity</li>
          </ul>
        </div>
      </div>
    </div>

  )
}
export default cloudguy;