import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.scss"
import LitaLogo from "../../images/partner_lita.png"

const Partner = () => (
  <section className={styles.partner}>
    <h2>Partner.</h2>
    <div className={styles.partnerBox}>
      <img src={LitaLogo} />
      <h3>Lita</h3>
      <p>The biggest game companionship service platform in Southeast Asia</p>
      <div className={styles.partnerDetail}>
        <span>Over 1 million registered users (gamers)</span>
        <span>100k+ verified and trained semi-pro games</span>
        <span>500+ top Gaming Influencers</span>
      </div>
    </div>
  </section>
)

export default Partner
