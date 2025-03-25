import { Link, useNavigate } from 'react-router';
import { useRegister } from '../../utils-API/authApi';
import './register.css'
import { useUserContext } from '../../provider-and-context/UserContext';

export default function Register() {
  const navigate = useNavigate();
  const { register } = useRegister();
  const { registerUserDataHandler, errorHandler } = useUserContext();


  const registerHandler = async (formData) => {
    
    const {email, password, rePass} = Object.fromEntries(formData);

    if(password !== rePass){
      errorHandler('Passwords do not match')
      return;
    };

    try{
      const response = await register(email, password);
      registerUserDataHandler(response);
      navigate('/');

    }catch(err){
      errorHandler(err.message)
    }
      

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
            <p className="redirect-login"> Already have an account? <Link className='log-a' href="/login">Log in</Link></p>
          </form>
        </div>
      </div>
    </section>
    );
}