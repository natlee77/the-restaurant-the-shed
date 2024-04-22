import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
 
  return (
    <div className="layout">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top  row">
          <a className="navbar-brand col-sm" href="/">
            <div className="logo">
              <img src="src/assets/shed.png" alt="The shed logo" />{" "}
            </div>
          </a>
          <button
            className="navbar-toggler col-sm"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className={'nav-item nav-link'} to={"/"}>Home</NavLink>
                <NavLink className={'nav-item nav-link'}  to={"/contact"}>Contact</NavLink>
                <NavLink className={'nav-item nav-link'}  to={"/order"}>Order</NavLink>
                <NavLink className={'nav-item nav-link'} to={"/admin"}>Admin</NavLink>
            </div>
          </div>
 
        </nav>
        
      </header>
      <main >
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2024 The Shed</p>
      </footer>
    </div>
  );
};

export default Layout;
