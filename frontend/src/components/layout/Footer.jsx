import React from "react";
import logo from '../../assets/img/logo/logo.png'
import "../../styles/components/layout/Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container__uno">
        <div className="footer__logo">
          <a href="/">
            <img
              src={logo}
              alt=""
            ></img>
          </a>
        </div>
      </div>

      <div className="footer_container__tres">
        <p>Nuestras Redes:</p>

        <div className="nuestras__redes">
          <a className="" href="https://api.whatsapp.com/send?phone=5493813016483" target={"_blank"} rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i> Whatsapp
          </a>
        </div>

        <div className="nuestras__redes">
          <a className="" href="https://www.instagram.com/blackfish_tatt/?hl=es" target={"_blank"} rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i> Instagram
          </a>
        </div>

        <div className="nuestras__redes">
          <a className="text-secondary  text-decoration-none" href="https://www.facebook.com/profile.php?id=100068472997387" target={"_blank"} rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i> Facebook
          </a>
        </div>
      </div>

      <div className="footer__copy">
        <p className="">Copyright - All rights reserved © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
