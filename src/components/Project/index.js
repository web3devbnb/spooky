import * as React from "react"
import * as styles from "./index.module.scss"
import ProjectIllustration from "../../images/project_illustration.png"
import IconCompatible from "../../images/project_compatible.png"
import IconConvenience from "../../images/project_convenience.png"
import IconEfficiency from "../../images/project_efficiency.png"

const Project = () => (
  <section className={styles.project}>
    <div className={styles.leftContent}>
      <h2>
        For <span>Project.</span>
      </h2>
      <p>More efficient for growth</p>

      <img
        src={IconCompatible}
        alt="Icon_Compatible"
        className={styles.subTitleIcon}
      />
      <h4>Launch Rental Marketplace to Elevate NFTs’ Utility</h4>
      <p>
        Launch or even create NFTs freely on Rentero Marketplace to increase the
        intrinsic value and utility of NFTs.
      </p>

      <img
        src={IconConvenience}
        alt="Icon_Convenience"
        className={styles.subTitleIcon}
      />
      <h4>Enable Guilds to Acquire Users at Scale</h4>
      <p>
        Guilds can access more potential users at a significant scale.
        Beneficial to either project start-up or growth.
      </p>

      <img
        src={IconEfficiency}
        alt="Icon_Efficiency"
        className={styles.subTitleIcon}
      />
      <h4>Trial Mode to Optimize Conversion Funnel</h4>
      <p>
        Trial modes are offered to users therefore they can experience projects
        before actually buying NFTs. More potential investors will be brought to
        projects which interest them.
      </p>

      <div>
        <a href="https://discord.io/rentero" target="_blank">
          <span className={styles.contactButton}>Contact us</span>
        </a>
        {/* <a href="https://rentero.gitbook.io/lita/" target="_blank">
          <span className={styles.documentButton}>Document</span>
        </a> */}
      </div>
    </div>
    <img src={ProjectIllustration} alt="Project_Illustration" />
  </section>
)

export default Project
