import * as React from "react"
import { Link } from "gatsby"
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

      <img src={IconCompatible} className={styles.subTitleIcon} />
      <h4>Compatible</h4>
      <p>Support all kinds of standards - ERC-721, ERC-1155</p>

      <img src={IconConvenience} className={styles.subTitleIcon} />
      <h4>Convenience</h4>
      <p>
        Fast installation for acquiring our services，easier to attract
        worldwide valuable gamefi investors
      </p>

      <img src={IconEfficiency} className={styles.subTitleIcon} />
      <h4>Efficiency</h4>
      <p>Faster to collaborate with numerous game guilds</p>

      <div>
        <span className={styles.contactButton}>Contact us</span>
        <span className={styles.documentButton}>Documentation</span>
      </div>
    </div>
    <img src={ProjectIllustration} />
  </section>
)

export default Project
