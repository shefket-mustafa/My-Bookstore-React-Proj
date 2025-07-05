import { useNavigate } from 'react-router';
import './contact.css'

import { useSuccessMessageHandler } from '../../utils/hooks/util-hooks';

export default function Contact() {
  const navigate = useNavigate();
  const {successMessageHandler} = useSuccessMessageHandler();

  const submitHandler = () => {
    successMessageHandler("Message sent!")
    navigate('/')
  }

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
            <form action= {submitHandler}>
              <div className="form-row">
                <div className="form-group col">
                  <input type="text" className="form-control" placeholder="Your Name" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input type="text" className="form-control" placeholder="Phone Number" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <input type="email" className="form-control" placeholder="Email" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <textarea className="message-box form-control" placeholder="Message" required rows={5} />
                </div>
              </div>
              <div className="btn_box">
                <button >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
    );
}