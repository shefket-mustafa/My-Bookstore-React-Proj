


function App() {
  

  return (
    <>
      <div className="hero_area">
    <div className="hero_bg_box">
      <img src="images/library-image.webp" alt=""/>
    </div>
    {/* <!-- header section strats --> */}
    <header className="header_section">
    
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand " href="index.html"> Bookstore </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">Sell&Buy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="team.html"> Exchange </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>
                      Login
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>
                      Logout
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    {/* <!-- end header section --> */}
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


  {/* <!-- service section --> */}

  <section className="service_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center ">
        <h2 className="">
          Our Services
        </h2>
        <p className="col-lg-8 px-0">
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        </p>
      </div>
      <div className="service_container">
        <div className="carousel-wrap ">
          <div className="service_owl-carousel owl-carousel">
            <div className="item">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Home Welding
                  </h5>
                  <p>
                    when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s4.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Machine Welding
                  </h5>
                  <p>
                    when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s6.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Car Welding
                  </h5>
                  <p>
                    when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Home Welding
                  </h5>
                  <p>
                    when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s4.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Machine Welding
                  </h5>
                  <p>
                    when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s6.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Car Welding
                  </h5>
                  <p>
                    when looking at its layout. The point of using Lorem Ipsum is
                    that it has a more-or-less normal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>

  {/* <!-- service section ends --> */}

  {/* <!-- about section --> */}

  <section className="about_section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5 offset-md-1">
          <div className="detail-box pr-md-2">
            <div className="heading_container">
              <h2 className="">
                About Us
              </h2>
            </div>
            <p className="detail_p_mt">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, orThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, orThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
            </p>
            <a href="about.html" className="">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-6 px-0">
          <div className="img-box ">
            <img src="images/library-image.webp" className="box_img" alt="about img"/>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- about section ends --> */}

  {/* <!-- team section --> */}

  <section className="team_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Our Team
        </h2>
        <p>
          Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris
          iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
        </p>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="images/t1.jpg" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Martin Anderson
              </h5>
              <h6 className="">
                supervisor
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="images/t2.jpg" alt="/"/>
            </div>
            <div className="detail-box">
              <h5>
                Denny Butler
              </h5>
              <h6 className="">
                supervisor
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mx-auto">
          <div className="box">
            <div className="img-box">
              <img src="images/t3.jpg" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Nathan Mcpherson
              </h5>
              <h6 className="">
                supervisor
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end team section --> */}

  {/* <!-- contact section --> */}
  <section className="contact_section ">
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-6 px-0">
          <div className="img-box ">
            <img src="images/contact-img.jpg" className="box_img" alt="about img"/>
          </div>
        </div>
        <div className="col-md-5 mx-auto">
          <div className="form_container">
            <div className="heading_container heading_center">
              <h2>Get In Touch</h2>
            </div>
            <form action="">
              <div className="form-row">
                <div className="form-group col">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-lg-6">
                  <input type="text" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="form-group col-lg-6">
                  <select name="" id="" className="form-control wide">
                    <option value="">Select Service</option>
                    <option value="">Service 1</option>
                    <option value="">Service 2</option>
                    <option value="">Service 3</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input type="text" className="message-box form-control" placeholder="Message" />
                </div>
              </div>
              <div className="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- end contact section --> */}

  {/* <!-- client section --> */}

  <section className="client_section layout_padding">
    <div className="container ">
      <div className="heading_container heading_center">
        <h2>
          Testimonial
        </h2>
        <hr/>
      </div>
      <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-7 col-md-9 mx-auto">
                <div className="client_container ">
                  <div className="img-box">
                    <img src="images/client.jpg" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h5>
                      Jone Mark
                    </h5>
                    <p>
                      Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                    </p>
                    <span>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-7 col-md-9 mx-auto">
                <div className="client_container ">
                  <div className="img-box">
                    <img src="images/client.jpg" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h5>
                      Jone Mark
                    </h5>
                    <p>
                      Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                    </p>
                    <span>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-7 col-md-9 mx-auto">
                <div className="client_container ">
                  <div className="img-box">
                    <img src="images/client.jpg" alt=""/>
                  </div>
                  <div className="detail-box">
                    <h5>
                      Jone Mark
                    </h5>
                    <p>
                      Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                    </p>
                    <span>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
            <span>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
            <span>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end client section --> */}

  {/* <!-- info section --> */}
  <section className="info_section ">
    <div className="container">
      <div className="info_top">
        <div className="row">
          <div className="col-md-3 ">
            <a className="navbar-brand" href="index.html">
              Finter
            </a>
          </div>
          <div className="col-md-5 ">
            <div className="info_contact">
              <a href="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  +01 1234567890
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="social_box">
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="info_bottom">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="info_detail">
              <h5>
                Company
              </h5>
              <p>
                Randomised words which don't look even slightly believable. If you are going to use a passage of
                Lorem
                Ipsum, you need to be sure
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="info_form">
              <h5>
                NEWSLETTER
              </h5>
              <form action="">
                <input type="text" placeholder="Enter Your Email" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="info_detail">
              <h5>
                Services
              </h5>
              <p>
                Randomised words which don't look even slightly believable. If you are going to use a passage of
                Lorem
                Ipsum, you need to be sure
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="">
              <h5>
                Useful links
              </h5>
              <ul className="info_menu">
                <li>
                  <a href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html">
                    About
                  </a>
                </li>
                <li>
                  <a href="service.html">
                    Services
                  </a>
                </li>
                <li>
                  <a href="team.html">
                    Team
                  </a>
                </li>
                <li className="mb-0">
                  <a href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end info_section --> */}

  {/* <!-- footer section --> */}
  <footer className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>
  {/* <!-- footer section --> */}



    </>
  )
}

export default App
