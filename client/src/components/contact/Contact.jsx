import './contact.css'

export default function Contact() {
  return (
      <>
      {/* <!-- contact section --> */}
  <section className="contact_section ">
    <div className="container-fluid">

      <div className="row">
        
        <div className="col-md-5 mx-auto">
          <div className="form_container">
            <div className="heading_container heading_center">
              <h2>Get In Touch ✉️</h2>
            </div>
            <form action="">
              <div className="form-row">
                <div className="form-group col">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input type="text" className="form-control" placeholder="Phone Number" />
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
  {/* <!-- end contact section --> */}</>
    );
}