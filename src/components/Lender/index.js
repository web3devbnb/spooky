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
      <p>Unlock the deep liquidity of your utility NFTs</p>

      <img src={IconSafety} alt="Icon_Safety" className={styles.subTitleIcon} />
      <h4>Safe</h4>
      <p>
        The rented assets are wrapped expirable versions and thus they are not
        spendable. The originals, be it fungible or non-fungible, remain in
        Rentero smart contracts.
      </p>

      <img src={IconMoney} alt="Icon_Money" className={styles.subTitleIcon} />
      <h4>Passive Income</h4>
      <p>Passive income can be earned just by lending their NFTs.</p>

      <img src={IconGame} alt="Icon_Game" className={styles.subTitleIcon} />
      <h4>Free to List </h4>
      <p>
        Easy and convenient for lenders to list their NFTs with 0 cost on
        Rentero marketplace.
      </p>

      <a href="https://app.rentero.io/lend" target="_blank" rel="noreferrer">
        <span className={styles.lendButton}>Lend NFT</span>
      </a>
    </div>
    <img src={LenderIllustration} alt="Lender_Illustration" />
  </section>
)

export default Lender
