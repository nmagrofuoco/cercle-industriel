import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer data-scroll-section>
      <div layout="column top-left" id="site-map">
        <div>
          <ul>
            <li>
              <Link to="/presentation">Cercle</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/presentation">Présentation</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/histoire">Histoire</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/comites">Comités</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/poles">Pôles</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/bapteme">Folklore</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/bapteme">Baptême</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/calotte">Calotte</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/evenements">Événements</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/salopette">Salopette</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div layout="column top-justify" className="copyrights">
        <div>
          Cercle Industriel ASBL - 58, Rue des Wallons, B-1348 Louvain-la-Neuve
          (Belgique)
        </div>
        <div>
          <a href="mailto:nathan.magrofuoco@gmail.com">
            Développé par Nathan Magrofuoco
          </a>
        </div>
      </div>
    </footer>
  );
}
