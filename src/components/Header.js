import React from "react"
import "../css/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Pod</h1>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="mailto:hello@jmes.tech">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
