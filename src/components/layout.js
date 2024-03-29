import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title} <span class="emoji-fix">👩‍💻</span> </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title} <span class="emoji-fix">👩‍💻</span>
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <body>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>{` `}💚💚💚
      </footer>
      </body>
    </div>
  )
}

export default Layout
