import './register.css'

export default function Register() {
  return (
      
     <section className="register-container">
      <div className="register-bg-box"></div>

      <div className="register-centered-box">
        

        <div className="register-form-box">
          <h3>Register</h3>
          <form  className="register-form">
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

            <label>
              Confirm password:
              <input
                type="password"
                name="RePass"
                
                required
              />
            </label>

            <button type="submit">Register In</button>
            <p className="redirect-login"> Already have an account? <a className='log-a' href="/login">Log in</a></p>
          </form>
        </div>
      </div>
    </section>
    );
}