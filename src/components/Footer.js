import React from "react";
import "../css/footer.css";
export const Footer = () => {
  return (
    <footer className="cont-footer text-center text-lg-start">
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">
              FS Oficial ⚽
            </h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="link"><i className="fas fa-book fa-fw fa-sm me-2"></i>Home</a>
              </li>
              <li>
                <a href="#" className="link"><i className="fas fa-book fa-fw fa-sm me-2"></i>All books</a>
              </li>
              <li>
                <a href="#" className="link"><i className="fas fa-user-edit fa-fw fa-sm me-2"></i>Our authors</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">
              Contacto ⚽
            </h5>
            <ul className="list-unstyled mb-0">
              <li>
                <span className="span-footer">Colombia Medellín(Antioquia)</span>
              </li>
              <li>
                <span className="span-footer">+57 312 446 52 00 </span>
              </li>
              <li>
                <a className="link" href="jacuesta13@miestudio.edu.co">jacuesta13@miestudio.edu.co </a>
              </li>
            </ul>

          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">
              Redes Sociales ⚽
            </h5>
            <ul className="list-unstyled mb-0">
              <li>
                <span className="span-footer">
                  Estamos en todos los lugares desde tu celular, tablet o laptop
                  Brindando la mayor información del futbol a nivel mudial.
                </span>
              </li>
              <li className="icon-footer ">
                <a href="#">
                  <i className="fab fa-facebook "></i>
                </a>
                <a href="#" >
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/jhonatanM30/fs-oficial">
                  <i className="fab fa-github-square"></i>
                </a>

              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="company-name">
        Jhonatan Cuesta Marin &copy; 2021
      </div>
    </footer>
  );
};
