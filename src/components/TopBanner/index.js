import * as React from "react"
import { Link } from "gatsby"
import Games from "../../images/banner_game.png"
import * as styles from "./index.module.scss"

const TopBanner = () => (
  <section className={styles.topBanner}>
    <div>
      <h2>
        Rent <span>lands</span>
      </h2>
      <p>
        World’s first NFT renting protocol that is built to maximize utility of
        NFTs
      </p>
      <span className={styles.bannerEntry}>Enter APP</span>
    </div>
    <img src={Games} alt="Game_Example" />
  </section>
)

export default TopBanner
