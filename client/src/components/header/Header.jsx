import { Link, useNavigate } from "react-router";
import { useUserContext } from "../../provider-and-context/UserContext";
import { useLogout } from "../../utils-API/authApi";

export default function Header() {
  const { isAuthenticated } = useUserContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const logoutHandler = async() => {
    await logout();
    navigate('/')
  }

  return (
    <>
      {/* <!-- header section starts --> */}
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
                    <Link className="nav-link" to="/">Home</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/books/catalog">Catalog</Link>
                  </li>

                  {isAuthenticated && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/books/sell">Sell</Link>
                    </li>
                  )}

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>

                  {!isAuthenticated ? (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          <i className="fa fa-user" aria-hidden="true"></i> Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/register">
                          <i className="fa fa-user" aria-hidden="true"></i>
                          <span>Register</span>
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li  className="nav-item">
                        <Link onClick={logoutHandler} className="nav-link" to="#">
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
