import * as React from "react"
import Logo from "../../images/header_logo.svg"
import Discord from "../../images/discord_logo.svg"
import Twitter from "../../images/twitter.svg"
// import Telegram from "../../images/telegram.svg"
import Medium from "../../images/medium_logo.png"
import * as styles from "./index.module.scss"

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.linkList}>
        <div className={styles.footerLogo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.communityLinks}>
          <a href="https://discord.com/invite/rZWZ3XhRJv" target="_blank">
            <img src={Discord} alt="Discord_link" />
          </a>
          <a href="https://twitter.com/SpookiverseProtocol" target="_blank">
            <img src={Twitter} alt="Twitter_link" />
          </a>
          <a href="https://medium.com/@Spookiverseprotocol" target="_blank">
            <img src={Medium} alt="Facebook_link" />
          </a>
        </div>
      </div>
      <p className={styles.copyRight}>
        Copyright 2021-2022 Spookiverse.io All rights reserved
      </p>
    </div>
  </section>
)

export default Footer
