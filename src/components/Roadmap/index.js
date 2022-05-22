import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.scss"

const Roadmap = () => (
  <section className={styles.roadmap}>
    <h2>Roadmap.</h2>
    <div className={styles.lineBox}>
      <div>
        <span>1</span>
        <h4>May 2022</h4>
        <p>
          Game NFT renting platform & NFT based blockchain game achievement
          system
        </p>
      </div>
      <div>
        <span>2</span>
        <h4>December 2022</h4>
        <p>Incentive layer forblockchain games</p>
      </div>
      <div>
        <span>3</span>
        <h4>June 2023</h4>
        <p>Support different blockchains and Layer 2 solutions</p>
      </div>
      <div>
        <span>4</span>
        <h4>2024</h4>
        <p>The Ultimate Destination for Web 3 Games</p>
      </div>
    </div>
  </section>
)

export default Roadmap
