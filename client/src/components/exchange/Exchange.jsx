export default function Exchange() {
  return (
      <>
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
  </section></>
    );
}