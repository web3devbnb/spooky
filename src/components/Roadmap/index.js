import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.scss"

const Roadmap = () => (
  <section className={styles.roadmap}>
    <h2>Roadmap.</h2>
    <div className={styles.lineBox}>
      <div>
        <span>1</span>
        <h4>August 2022</h4>
        <p>NFTs Rental Marketplace Publish</p>
      </div>
      <div>
        <span>2</span>
        <h4>October 2022</h4>
        <p>NFTs Rental Protocol Land on Chain: Solana</p>
      </div>
      <div>
        <span>3</span>
        <h4>December 2022</h4>
        <p>Token Launch</p>
      </div>
      <div>
        <span>4</span>
        <h4>March 2023</h4>
        <p>Enable Governance and Staking Function</p>
      </div>
    </div>
  </section>
)

export default Roadmap
