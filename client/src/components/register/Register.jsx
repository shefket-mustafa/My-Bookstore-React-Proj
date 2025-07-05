import { Link, useNavigate } from 'react-router';
import { useRegister } from '../../utils/utils-auth-api/authApi.js';
import './register.css'
import { registerValidator } from '../../utils/validators/validator.js';
import { useState } from 'react';
import { useErrorMessageHandler, useSuccessMessageHandler } from '../../utils/hooks/util-hooks.js';
import { useAuthContext } from '../../provider-and-context/AuthContext.jsx';

export default function Register() {
  const navigate = useNavigate();
  const { register } = useRegister();
  const { registerUserDataHandler } = useAuthContext();
  const {successMessageHandler} = useSuccessMessageHandler();
  const {errorMessageHandler} = useErrorMessageHandler()
  
  const [email, setEmail] = useState('');


  const registerHandler = async (formData) => {
    
    const {email, password, rePass} = Object.fromEntries(formData);

    if(password !== rePass){
      errorMessageHandler('Passwords do not match')
      return;
    };

    
    try{
      registerValidator(email,password)
      const response = await register(email, password);
      registerUserDataHandler(response);
      navigate('/');
      successMessageHandler('Successful registration!')
    }catch(err){
      errorMessageHandler(err.message)
    }
      

  }
  return (
      
     <section className="register-container">
      <div className="register-bg-box"></div>

      <div className="register-centered-box">
        

        <div className="register-form-box">
          <h3>Register</h3>
          <form onSubmit={(e) => {
            e.preventDefault()
            registerHandler(new FormData(e.target))
          }}  className="register-form">
            <label>
              Email:
              <input
                type="email"
                name="email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <p className="redirect-login"> Already have an account? <Link className='log-a' to="/login">Log in</Link></p>
          </form>
        </div>
      </div>
    </section>
    );
}