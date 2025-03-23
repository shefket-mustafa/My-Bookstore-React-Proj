import { useNavigate } from 'react-router';
import { useLogin } from '../../utils-API/authApi';
import './login.css'

export default function Login() {
    const navigate = useNavigate();
    const { login } = useLogin();

    const loginHandler = async (formData) => {
      const { email, password } = Object.fromEntries(formData);

      const repsponse = await login(email,password);
      
    }
  return (
      
     <section className="login-container">
      <div className="login-bg-box"></div>

      <div className="login-centered-box">
        

        <div className="login-form-box">
          <h3>Login</h3>
          <form  action={loginHandler} className="login-form">
            <label>
              Email:
              <input
                type="email"
                name="email"
               
                required
              />
            </label>

            <label>
              Password:
              <input
                type="password"
                name="password"
                
                required
              />
            </label>

            <button type="submit">Log In</button>
            <p className="redirect-register"> Don't have an account? <a className='reg-a' href="/register">Register</a></p>
          </form>
        </div>
      </div>
    </section>
    );
}