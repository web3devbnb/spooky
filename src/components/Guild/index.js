import * as React from "react"
import * as styles from "./index.module.scss"
import GuildIllustration from "../../images/guild_illustration.png"
import IconEfficient from "../../images/guild_efficient .png"
import IconRevenue from "../../images/guild_revenue.png"
import IconSafety from "../../images/guild_safety.png"

const Guild = () => {
  return (
    <section className={styles.guild}>
      <img src={GuildIllustration} alt="Guild_Illustration" />
      <div className={styles.rightContent}>
        <h2>
          For <span>Guild.</span>
        </h2>
        <p>Provide safe, intelligent and efficient rental services</p>

        <img src={IconSafety} alt="Icon_Cost" className={styles.subTitleIcon} />
        <h4>Asset security</h4>
        <p>
          Separation of NFT ownership and use rights through contracts to fully
          guarantee asset arrangements
        </p>

        <img
          src={IconRevenue}
          alt="Icon_Combination"
          className={styles.subTitleIcon}
        />
        <h4>Maximize revenue</h4>
        <p>
          NFT asset allocation rules can be formulated to maximize the
          allocation of scholar and improve the efficiency of union gold
        </p>

        <img
          src={IconEfficient}
          alt="Icon_Game"
          className={styles.subTitleIcon}
        />
        <h4>Efficient management</h4>
        <p>
          Provide complete dashboard indicators, automatic monitoring and
          settlement of revenue sharing
        </p>

        <a href="https://app.rentero.io" target="_blank" rel="noreferrer">
          <span className={styles.marketButton}>Go to Market</span>
        </a>
      </div>
    </section>
  )
}

export default Guild
