import * as React from "react"
import PropTypes from "prop-types"
import HeaderLogo from "../../images/header_logo.svg"
import * as styles from "./index.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <img src={HeaderLogo} alt="Header_Logo" />
      <nav className={styles.rightNav}>
        {/* <span>
          <a href="https://Spookiverse.gitbook.io/lita/" target="_blank">
            White Paper
          </a>
        </span> */}
        <span>
          <a
            href="https://docs.Spookiverse.io/concepts/overview"
            target="_blank"
            rel="noreferrer"
          >
            Document 
          </a>
        </span>
        <span className={styles.forGuild}>
          <a
            href="https://app.Spookiverse.io/lend?forguild"
            target="_blank"
            rel="noreferrer"
          >
            For Guild
          </a>
        </span>
        <span className={styles.headerEntry}>
          <a href="https://app.Spookiverse.io" rel="noreferrer">
            Enter APP
          </a>
        </span>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
