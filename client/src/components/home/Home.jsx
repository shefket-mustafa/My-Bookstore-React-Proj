import { Link } from "react-router";
import { useUserContext } from "../../provider-and-context/UserContext";


export default function Home() {
  const { isAuthenticated } = useUserContext()
  console.log("Home rendered. Auth:", isAuthenticated);
  return (
    <div className="hero_area">
    <div className="hero_bg_box">
      <img src="images/library-image.webp" alt=""/>
    </div>
   
    

    {/* <!-- slider section --> */}
    <section className="slider_section">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 col-md-11 mx-auto">
        <div className="detail-box">
          <h1>Welcome to our <br/> Bookstore!</h1>
          <p>
            Discover a world of stories, knowledge, and imagination...
          </p>
          <div className="btn-box">
            <Link to="/books/catalog" className="btn1">Explore</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
    );
}