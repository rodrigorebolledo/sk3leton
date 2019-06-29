import React from "react";
const Services = () => (
  <section className="page-section" id="services">
    <div className="container">
      <h2 className="text-center mt-0">Servicios</h2>
      <hr className="divider my-4" />
      <div className="row">
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <i className="fa-4x fas fa-desktop text-primary mb-4" />
            <h3 className="h4 mb-2">Desarrollo de sitios de presentación</h3>
            <p className="text-muted mb-0">
              Ponte "online" con nuestros servicios.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <i className="fas fa-4x fa-mobile-alt text-primary mb-4" />
            <h3 className="h4 mb-2">Desarrollo de apps Android & iOs</h3>
            <p className="text-muted mb-0">
              Desarrollamos aplicaciones multiplataforma.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <i className="far fa-4x fa-building text-primary mb-4" />
            <h3 className="h4 mb-2">
              Desarrollo de webs de gestión empresarial
            </h3>
            <p className="text-muted mb-0">
              Automatiza tus procesos con una web app a tu medida.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="mt-5">
            <i className="fa-4x fab fa-instagram text-primary mb-4" />
            <h3 className="h4 mb-2">Administración de redes sociales</h3>
            <p className="text-muted mb-0">
              Administramos tus redes sociales y posicionamos tu marca.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Services;
