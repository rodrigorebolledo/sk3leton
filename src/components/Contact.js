import React from "react";
const Contact = () => (
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="mt-0">¡Contáctanos!</h2>
          <hr className="divider my-4" />
          <p className="text-muted mb-5">
            Si tienes alguna duda o necesitas una cotización... ¡Contáctanos!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
          <i className="fas fa-phone fa-3x mb-3 text-muted" />
          <div>+56 (9) 93949552</div>
        </div>
        <div className="col-lg-4 mr-auto text-center">
          <i className="fas fa-envelope fa-3x mb-3 text-muted" />
          <a className="d-block" href="mailto:hola@sk3leton.com">
            hola@sk3leton.com
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default Contact;
