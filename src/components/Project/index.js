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
      <p>Convenient services to use</p>

      <img
        src={IconCompatible}
        alt="Icon_Compatible"
        className={styles.subTitleIcon}
      />
      <h4>Compatible</h4>
      <p>Support all kinds of standards - ERC-721, ERC-1155</p>

      <img
        src={IconConvenience}
        alt="Icon_Convenience"
        className={styles.subTitleIcon}
      />
      <h4>Convenience</h4>
      <p>
        Fast installation for acquiring our services，easier to attract
        worldwide valuable gamefi investors
      </p>

      <img
        src={IconEfficiency}
        alt="Icon_Efficiency"
        className={styles.subTitleIcon}
      />
      <h4>Efficiency</h4>
      <p>Faster to collaborate with numerous game guilds</p>

      <div>
        <a href="https://discord.io/rentero" target="_blank">
          <span className={styles.contactButton}>Contact us</span>
        </a>
        <a href="https://rentero.gitbook.io/lita/" target="_blank">
          <span className={styles.documentButton}>Document</span>
        </a>
      </div>
    </div>
    <img src={ProjectIllustration} alt="Project_Illustration" />
  </section>
)

export default Project
