export default function Testimonial() {
  return (
      <>
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
                      Editors now use Lorem Ipsum as their default model text, and a search for `lorem ipsum`` will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
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
                      Editors now use Lorem Ipsum as their default model text, and a search for `lorem ipsum`` will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
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
                      Editors now use Lorem Ipsum as their default model text, and a search for `lorem ipsum`` will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
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

  {/* <!-- end client section --> */}</>
    );
}