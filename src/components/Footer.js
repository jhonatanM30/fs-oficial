import React from "react";
import "../css/footer.css";
export const Footer = () => {
  return (
    <footer className="cont-footer row">           
        <div className="col footer-item-left">
          <h3>
            FS <span>Oficial</span>
            <span>⚽</span>
          </h3>
          <div className="item-links">
            <a href="#">Home</a>  <a href="#">Blog</a> {" "}
            <a href="#">Pricing</a> <a href="#">About</a> {" "}
             <a href="#">Contact</a>
          </div>
          <p className="footer-company-name">Jhonatan Cuesta Marin &copy; 2021</p>
        </div>
        <div className="col footer-item-center">
          <div className="item-center-icon">
            <i className="fa fa-map-marker"></i> <span>Colombia  Medellín(Antioquia)</span>{" "}           
          </div>
          <div className="item-center-icon">
            <i className="fa fa-phone"></i> <span>+57 312 446 52 00 </span>
          </div>
          <div className="item-center-icon">
            <i className="fa fa-envelope"></i>{" "}
            <span>
              <a href="mailto:support@company.com">
                jmarindesarrollo@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="col footer-item-right">
          <p className="footer-company-about">
            <span>About the company</span>           
            Fantacy Design is a blog for web designers, web develpor &amp; SEO
            Learner.
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-github-square"></i>
            </a>
          </div>
        </div>      
    </footer>
  );
};
