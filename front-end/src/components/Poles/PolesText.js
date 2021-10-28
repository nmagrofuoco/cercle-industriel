import React from 'react';

import { motion } from 'framer-motion';

import Authors from '../Authors';

export default function PolesText({ updateScroller }) {
  const author = {
    name: 'Nathan "Fafanculo" Magrofuoco',
    postes: 'Culture/anim 2016-17, Info/web 2015-16',
    photo: '2016-fafanculo.jpg',
  };

  return (
    <div
      data-scroll-section
      layout="rows bottom-justify"
      className="container container-text"
    >
      <motion.div
        className="text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7 }}
      >
        <p>
          Les activités du Cercle Industriel ne se limitent pas à l'organisation
          d'évènements strictement festifs. Au fur et à mesure de son existence,
          différents pôles ont été créés afin de répondre aux objectifs annexes
          fixés par ses membres. A l'heure où sont écrites ces lignes, trois
          pôles existent encore : le SICI (Service d'Impression du Cercle
          Industriel), le CCII (Contact Cercle Industriel Industries) et le
          CECI-BEST (Contact Europe Cercle Industriel). D'autres pôles - comme
          le CIA (Cercle Industriel Académique) - ont déjà vu le jour mais n'ont
          pas réussi à s'installer durablement sur le campus néo-Louvaniste.
          Enfin, notons la création du GCI (Grand Cercle Industriel) le 14 mars
          2002 afin de chapeauter les différents pôles du CI.
        </p>
        <h2>Grand Cercle Industriel (GCI)</h2>
        <p>
          Le GCI est composé d'anciens responsables du CI et des différents
          pôles, à condition qu'ils soient toujours étudiants. Son rôle premier
          est de préserver les liens tissés entres les pôles et apporter son
          soutien lors de l'organisation de grands événements. A cet effet, il
          organise chaque année un grand repas réunissant les responsables du CI
          et des trois pôles.
        </p>
        <h2>Service d'Impression du Cercle Industriel (SICI)</h2>
        <p>
          Cette association est responsable de la diffusion des supports de
          cours relatifs à l'École Polytechnique de Louvain. Ce service est
          offert par dix étudiants en ingénieur civil. Le SICI s'occupe de la
          vente de la plupart des notes de cours durant les cinq années d'études
          pour devenir ingénieur civil. Il propose également les livres de
          référence utilisés lors des trois années de bachelier et des deux
          années des différents masters, et ce à des prix défiants toute
          concurrence.
        </p>
        <p className="more">
          <a href="https://www.sici.be/" target="_blank" rel="noreferrer">
            En savoir plus le SICI
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
          </a>
        </p>
        <h2>Contact Cercle Industriel Industries (CCII)</h2>
        <p>
          Cette association est responsable de l'organisation du Bal des
          Ingénieurs, de conférences sur l'emploi, de diverses visites
          d'entreprises et des Journées de l'Industrie organisées annuellement
          sur le parking Sainte-Barbe afin de faire rencontrer étudiants en
          dernière année et entreprises sur le campus universitaire.
        </p>
        <p className="more">
          <a href="http://www.ccii.be/" target="_blank" rel="noreferrer">
            En savoir plus sur le CCII
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
          </a>
        </p>
        <h2>Contact Europe Cercle Industriel (CECI-BEST)</h2>
        <p>
          Antenne locale BEST responsable de l'accueil d'étudiants erasmus et de
          l'organisation de cours scientifiques à l'étranger pour les étudiants
          de l'Ecole Polytechnique de Louvain.
        </p>
        <p className="more">
          <a
            href="http://best-lln.be/wordpress/"
            target="_blank"
            rel="noreferrer"
          >
            En savoir plus sur le CECI-BEST
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
          </a>
        </p>
      </motion.div>
      <Authors authors={[author]} updateScroller={updateScroller} />
    </div>
  );
}
