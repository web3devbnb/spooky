import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.scss"
import LenderIllustration from "../../images/lenders_illustration.png"
import IconSafety from "../../images/lender_icon_1.png"
import IconMoney from "../../images/lender_icon_2.png"
import IconGame from "../../images/lender_icon_3.png"

const Lender = () => (
  <section className={styles.lender}>
    <div className={styles.leftContent}>
      <h2>
        For <span>Lenders.</span>
      </h2>
      <p>
        Allow you to make the best use of your assets, earn as many earnings as
        you can
      </p>

      <img src={IconSafety} className={styles.subTitleIcon} />
      <h4>No default risk</h4>
      <p>
        The rented assets are wrapped expirable versions and thus they are not
        spendable. The originals, be it fungible or non-fungible, remain in
        Rentero smart contracts
      </p>

      <img src={IconMoney} className={styles.subTitleIcon} />
      <h4>Estimate</h4>
      <p>Fair Estimate of your NFT’s value</p>

      <img src={IconGame} className={styles.subTitleIcon} />
      <h4>Abundant</h4>
      <p>Support most gamefi projects across multi-chain</p>

      <span className={styles.lendButton}>Lend NFT</span>
    </div>
    <img src={LenderIllustration} />
  </section>
)

export default Lender
