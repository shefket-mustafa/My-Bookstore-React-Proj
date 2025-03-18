import Header from "../header/Header";

export default function Home() {
  return (
    <div className="hero_area">
    <div className="hero_bg_box">
      <img src="images/library-image.webp" alt=""/>
    </div>
   
    <Header />

    {/* <!-- slider section --> */}
    <section className="slider_section">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 col-md-11 mx-auto">
        <div className="detail-box">
          <h1>Welcome to your <br/> Bookstore!</h1>
          <p>
            Discover a world of stories, knowledge, and imagination...
          </p>
          <div className="btn-box">
            <a href="" className="btn1">Explore</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* <!-- end slider section --> */}
  </div>
    );
}