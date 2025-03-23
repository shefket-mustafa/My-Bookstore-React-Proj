import { Link } from "react-router";

export default function Header() {
  return (
      <>
       {/* <!-- header section strats --> */}
    <header className="header_section">
    
    <div className="header_bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand " to="/"> Bookstore </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books/catalog">Catalog</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/books/sell"> Sell</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Login
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register"> Register </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Logout
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
  {/* <!-- end header section --> */}</>
    );
}