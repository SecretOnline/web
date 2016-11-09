import React, { PropTypes } from "react"
import { Link } from "react-router"
import Svg from "react-svg-inline"

import styles from "./index.css"

const Header = (props, { metadata: { pkg } }) => (
  <header className={ styles.header }>
    <nav className={ styles.nav }>
      <div className={ styles.navPart1 }>
        <Link
          className={ styles.link }
          to="/"
        >
          <h1 className={ styles.title }>{ "secret_online" }</h1>
        </Link>
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
