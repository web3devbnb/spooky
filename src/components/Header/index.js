import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from  "./index.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div>logo</div>
    <nav>
      <span>
        <a>White Paper</a>
      </span>
      <span>
        <a>Community</a>
      </span>
    </nav>
    <div>Enter APP</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
