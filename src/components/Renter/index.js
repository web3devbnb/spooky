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
        For <span>Renters.</span>
      </h2>
      <p>More accessible and practical</p>

      <img src={IconCost} alt="Icon_Cost" className={styles.subTitleIcon} />
      <h4>No Collateral</h4>
      <p>
        No need to deposit any collateral like traditional rental protocols.
      </p>

      <img
        src={IconCombination}
        alt="Icon_Combination"
        className={styles.subTitleIcon}
      />
      <h4>Access to Varied Utility NFTs</h4>
      <p>
        Strong accessibility creates a possibility to rent different kinds of
        utility NFTs, including gaming, metaverse and other utilities.
      </p>

      <img src={IconGame} alt="Icon_Game" className={styles.subTitleIcon} />
      <h4>Sublet to Others</h4>
      <p>
        Very flexible rental system. The NFTs you rented can be subleased to
        others and lower the renting cost.
      </p>

      <a href="https://app.Spookiverse.io" target="_blank" rel="noreferrer">
        <span className={styles.marketButton}>Go to Market</span>
      </a>
    </div>
  </section>
)

export default Renter
