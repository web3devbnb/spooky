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
        <p>Safe and profitable solutions</p>

        <img src={IconSafety} alt="Icon_Cost" className={styles.subTitleIcon} />
        <h4>Assets Security</h4>
        <p>
          Fully guarantee assets security and arrangement by separating NFTs’
          owner and user rights through smart contracts.
        </p>

        <img
          src={IconRevenue}
          alt="Icon_Combination"
          className={styles.subTitleIcon}
        />
        <h4>Maximize Revenue</h4>
        <p>
          The distribution of scholars and efficiency of guilds can be maximized
          by formulating NFTs’ asset allocation rules.
        </p>

        <img
          src={IconEfficient}
          alt="Icon_Game"
          className={styles.subTitleIcon}
        />
        <h4>Efficient Management</h4>
        <p>
          Various ways to help guilds with operating and managing their NFTs’
          assets. Provide functions including complete dashboard indicators,
          automatic monitoring and revenue sharing system.
        </p>

        <a href="https://app.rentero.io" target="_blank" rel="noreferrer">
          <span className={styles.marketButton}>Go to Market</span>
        </a>
      </div>
    </section>
  )
}

export default Guild
