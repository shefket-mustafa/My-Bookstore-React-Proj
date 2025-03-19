import { Link } from "react-router";

export default function ErrorPage() {
  return (
   
          <>
         
    <div className="error-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      
      <div className="error-actions">
        <Link to="/" className="btn-home">Go Back Home</Link>
        <Link to="/contact" className="btn-support">Contact Support →</Link>
      </div>
    </div>
  

          </>
        )
      }
      
