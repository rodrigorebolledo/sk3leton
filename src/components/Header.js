import React from "react";

const Header = () => (
  <header className="masthead" id="menu-top">
    <div className="container h-100">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="col-lg-10 align-self-end">
          <h1 className="text-uppercase text-white font-weight-bold">
            Sk<span clasName="red">3</span>leton Software
          </h1>
          <hr className="divider my-4" />
        </div>
        <div className="col-lg-8 align-self-baseline">
          <p className="text-white-75 font-weight-light mb-5">
            ¿Deseas informatizar tu negocio? ¡Estás en el lugar indicado!
          </p>
          <a
            className=" d-none  btn btn-primary btn-xl js-scroll-trigger"
            href="#about"
          >
            Find Out More
          </a>
        </div>
      </div>
    </div>
  </header>
);
export default Header;
