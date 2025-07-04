import { Link, useNavigate } from "react-router";
import { useUserContext } from "../../provider-and-context/UserContext";
import { useLogout } from "../../utils/utils-auth-api/authApi.js";

export default function Header() {
  const { isAuthenticated, messageHandler } = useUserContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const logoutHandler = async() => {
    await logout();
    navigate('/')
    messageHandler('Logged out!')
  }

  const closeNavbar = () => {
    const toggler = document.querySelector('.navbar-toggler');
    const navbar = document.getElementById('navbarSupportedContent');
  
    if (navbar.classList.contains('show') && toggler) {
      toggler.click();
    }
  };
  

  return (
    <>
      
      <header className="header_section">
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <Link className="navbar-brand " to="/">Bookstore</Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""> </span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">

                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/about" onClick={closeNavbar}>About</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/books/catalog" onClick={closeNavbar}>Catalog</Link>
                  </li>

                  {isAuthenticated && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/books/sell" onClick={closeNavbar}>Sell</Link>
                    </li>
                  )}

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact Us</Link>
                  </li>

                  {!isAuthenticated ? (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login" onClick={closeNavbar}>
                          <i className="fa fa-user" aria-hidden="true"></i> Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/register" onClick={closeNavbar}>
                          <i className="fa fa-user" aria-hidden="true"></i>
                          <span>Register</span>
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li  className="nav-item">
                        <Link onClick={logoutHandler} className="nav-link" to="/" >
                          <i className="fa fa-user" aria-hidden="true"></i> Logout
                        </Link>
                      </li>
                  )}

                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* <!-- end header section --> */}
    </>
  );
}
