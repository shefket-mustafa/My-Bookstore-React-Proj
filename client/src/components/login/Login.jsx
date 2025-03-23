import './login.css'

export default function Login() {
  return (
      
     <section className="login-container">
      <div className="login-bg-box"></div>

      <div className="login-centered-box">
        

        <div className="login-form-box">
          <h3>Login</h3>
          <form  className="login-form">
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
          </form>
        </div>
      </div>
    </section>
    );
}