import { navLinks } from "./siteData";

export default function Header({ menuOpen, onOpenMenu, onCloseMenu }) {
  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home">
            KHALIL NUR KHALIL
          </a>
          <nav className="desktop-nav">
            {navLinks.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <a className="button button-primary nav-button" href="#invest">
            Invest in Katsina
          </a>
          <button className="menu-toggle" aria-label="Open menu" onClick={onOpenMenu}>
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-top">
          <span className="brand">KHALIL NUR KHALIL</span>
          <button onClick={onCloseMenu} aria-label="Close menu">
            Close
          </button>
        </div>
        <nav>
          {navLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={onCloseMenu}>
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-primary" href="#invest" onClick={onCloseMenu}>
          Invest in Katsina
        </a>
      </div>
    </>
  );
}
