import { Link, useNavigate } from "react-router";
import { useLogin } from "../../utils/utils-auth-api/authApi.js";
import { useUserContext } from "../../provider-and-context/UserContext";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useLogin();
  const { loginUserDataHandler, errorHandler, messageHandler } = useUserContext();

  const [email, setEmail] = useState('')

  const loginHandler = async (formData) => {
    const { email, password } = Object.fromEntries(formData);

    try {
      const response = await login(email, password);
      loginUserDataHandler(response);
      navigate("/");
      messageHandler('Successful login!')

    } catch (err) {
      errorHandler(err.message);
    }
  };

  return (
    <section className="login-container">
      <div className="login-bg-box"></div>

      <div className="login-centered-box">
        <div className="login-form-box">
          <h3>Login</h3>
          <form action={loginHandler} className="login-form">
            <label>
              Email:
              <input type="email" name="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>

            <label>
              Password:
              <input type="password" name="password" required />
            </label>

            <button type="submit">Log In</button>
            <p className="redirect-register">
              {" "}
              Don't have an account?{" "}
              <Link className="reg-a" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
