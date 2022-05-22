import * as React from "react"
import PropTypes from "prop-types"
import HeaderLogo from "../../images/header_logo.svg"
import * as styles from "./index.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <img src={HeaderLogo} />
      <nav>
        <span>
          <a href="" target="_blank">White Paper</a>
        </span>
        <span>
          <a href="" target="_blank">Community</a>
        </span>
        <span className={styles.headerEntry}>Enter APP</span>
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
