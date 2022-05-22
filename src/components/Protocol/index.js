import * as React from "react"
import { Link } from "gatsby"
import Compatability from "../../images/protocol_compatability.png"
import Share from "../../images/protocol_share.png"
import Collateral from "../../images/protocol_collateral.png"
import * as styles from "./index.module.scss"

const Protocol = () => (
  <section className={styles.protocol}>
    <h2>Rentero Protocol.</h2>
    <div className={styles.cardBox}>
      <div className={styles.cardItem}>
        <img src={Compatability} />
        <h4>Compatability</h4>
        <p>
          Compatible with ERC-721, ERC-1155, and most chains like ETH / Polygon
          / BSC and etc.
        </p>
      </div>
      <div className={styles.cardItem}>
        <img src={Share} />
        <h4>Share Mechanism</h4>
        <p>Original share mechanism for making long-term passive income.</p>
      </div>
      <div className={styles.cardItem}>
        <img src={Collateral} />
        <h4>Collateral Free</h4>
        <p>Very low cost for both renting and borrowing.</p>
      </div>
    </div>
  </section>
)

export default Protocol
