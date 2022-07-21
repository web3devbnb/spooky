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
        <img src={Compatability} alt="Icon_Compatability" />
        <h4>Compatibility</h4>
        <p>
          Compatible with ERC-721, ERC-1155, and most chains like ETH / Polygon
          / BSC, etc.
        </p>
      </div>
      <div className={styles.cardItem}>
        <img src={Share} alt="Icon_Share" />
        <h4>0 Collateral</h4>
        <p>
          No risk such as over collateralization. Extremely low cost for both
          renting and lending.
        </p>
      </div>
      <div className={styles.cardItem}>
        <img src={Collateral} alt="Icon_Collateral" />
        <h4>Flexible Payment Mode</h4>
        <p>
          Profit-sharing mode, Rental fee mode and Trial mode are always
          available for users to choose.
        </p>
      </div>
    </div>
  </section>
)

export default Protocol
