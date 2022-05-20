import * as React from "react"
import Logo from "../../images/logo-pure.svg"
import Discord from "../../images/discord_logo.svg"
import Twitter from "../../images/twitter.svg"
import Telegram from "../../images/telegram.svg"
import Facebook from "../../images/facebook_icon.svg"
import * as styles from "./index.module.scss"

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.linkList}>
        <div className={styles.footerLogo}>
          <img src={Logo} alt="logo" />
          <span>Rentero</span>
        </div>
        <div className={styles.communityLinks}>
          <a href="" target="_blank">
            <img src={Discord} alt="Discord_link" />
          </a>
          <a href="" target="_blank">
            <img src={Twitter} alt="Twitter_link" />
          </a>
          <a href="" target="_blank">
            <img src={Telegram} alt="Telegram_link" />
          </a>
          <a href="" target="_blank">
            <img src={Facebook} alt="Facebook_link" />
          </a>
        </div>
      </div>
      <p className={styles.copyRight}>
        Copyright 2021-2022 Rentero.io All rights reserved
      </p>
    </div>
  </section>
)

export default Footer
