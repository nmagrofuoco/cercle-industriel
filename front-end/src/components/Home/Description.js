import React from 'react';
import { Link } from 'react-router-dom';

export default function Description() {
  return (
    <div data-scroll-section layout="rows top-justify" className="container">
      <div className="item-p">
        <h2>Cercle</h2>
        <p>
          Le Cercle Industriel, dit « CI », a été fondé en 1872 à Leuven et a
          rejoint Louvain-la-Neuve et son Université francophone en 1973. Son
          rôle premier est de faciliter le contact entre les étudiants, et entre
          les étudiants et les entreprises.
        </p>
        <p className="more">
          <Link to="/presentation">
            En savoir plus sur le cercle
            <svg width="18" height="12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M10.5.964L16.8 5.5 10.5 10.036"
                  strokeWidth="1.4"
                ></path>
                <path
                  d="M16.5 5.5H.5"
                  strokeLinecap="square"
                  strokeWidth="1.4"
                ></path>
              </g>
            </svg>
          </Link>
        </p>
      </div>
      <div className="item-p">
        <h2>Folklore</h2>
        <p>
          Le Cercle Industriel est une figure notable du folklore estudiantin
          dont il perpétue les traditions à travers les passages du baptême et
          de la calotte, célèbre couvre-chef des étudiants catholiques
          francophones agrémenté de nombreux pins et décorations.
        </p>
        <p className="more">
          <Link to="/bapteme">
            En savoir plus sur le folklore
            <svg width="18" height="12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M10.5.964L16.8 5.5 10.5 10.036"
                  strokeWidth="1.4"
                ></path>
                <path
                  d="M16.5 5.5H.5"
                  strokeLinecap="square"
                  strokeWidth="1.4"
                ></path>
              </g>
            </svg>
          </Link>
        </p>
      </div>
      <div className="item-p">
        <h2>Activités</h2>
        <p>
          La vie du Cercle Industriel s'organise quotidiennement autour de sa
          cafétéria, située dans le hall facultaire, et de sa surface
          d'animation, située à quelques pas des auditoires. L'année académique
          est également ponctuée par l'organisation de diverses activités
          phares.
        </p>
        <p className="more">
          <Link to="/evenements">
            En savoir plus sur nos activités
            <svg width="18" height="12" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M10.5.964L16.8 5.5 10.5 10.036"
                  strokeWidth="1.4"
                ></path>
                <path
                  d="M16.5 5.5H.5"
                  strokeLinecap="square"
                  strokeWidth="1.4"
                ></path>
              </g>
            </svg>
          </Link>
        </p>
      </div>
    </div>
  );
}
