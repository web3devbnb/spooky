import * as React from "react"
import * as styles from "./index.module.scss"
import RenterIllustration from "../../images/renter_illurstation.png"
import IconCost from "../../images/renter_cost.png"
import IconCombination from "../../images/renter_combination.png"
import IconGame from "../../images/renter_game.png"

const Renter = () => (
  <section className={styles.renter}>
    <img src={RenterIllustration} alt="Renter_Illustration" />
    <div className={styles.rightContent}>
      <h2>
        For <span>Renter.</span>
      </h2>
      <p>0 risk - No collateral for earning</p>

      <img src={IconCost} alt="Icon_Cost" className={styles.subTitleIcon} />
      <h4>Low Cost</h4>
      <p>No collateral for earning</p>

      <img
        src={IconCombination}
        alt="Icon_Combination"
        className={styles.subTitleIcon}
      />
      <h4>Combination</h4>
      <p>Access services for optimazing your NFT combinations</p>

      <img src={IconGame} alt="Icon_Game" className={styles.subTitleIcon} />
      <h4>Abundant</h4>
      <p>Support most gamefi projects across multi-chain</p>

      <a href="https://app.rentero.io" target="_blank" rel="noreferrer">
        <span className={styles.marketButton}>Go to Market</span>
      </a>
    </div>
  </section>
)

export default Renter
