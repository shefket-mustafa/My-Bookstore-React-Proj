import { useNavigate } from 'react-router';
import { useRegister } from '../../utils-API/authApi';
import './register.css'

export default function Register() {
  const { register } = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (formData) => {
    
    const {email, password, rePass} = Object.fromEntries(formData);

    if(password !== rePass){
      return;
    };

      await register(email, password);
      navigate('/');

  }
  return (
      
     <section className="register-container">
      <div className="register-bg-box"></div>

      <div className="register-centered-box">
        

        <div className="register-form-box">
          <h3>Register</h3>
          <form action={registerHandler}  className="register-form">
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
                name="rePass"
                
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