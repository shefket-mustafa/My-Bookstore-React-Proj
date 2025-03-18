export default function Header() {
  return (
      <>
       {/* <!-- header section strats --> */}
    <header className="header_section">
    
    <div className="header_bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand " href="index.html"> Bookstore </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html"> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="service.html">Sell&Buy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="team.html"> Exchange </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Login
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>
                    Logout
                  </span>
                </a>
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