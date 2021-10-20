import React from 'react';

import { motion } from 'framer-motion';

import Authors from '../Authors';

import author1Photo from '../../img/unknown-profile.jpg';
import author2Photo from '../../img/unknown-profile.jpg';

export default function PresentationText({ updateScroller }) {
  const authors = [
    {
      name: 'Antoine "Maindial" Maindiaux',
      postes: 'Président 2015-16, Souk 2014-15',
      photo: author1Photo,
    },
    {
      name: 'Robin "Mouf" El Raghibi',
      postes: 'Secrétaire 2015-16, Contact 2014-15',
      photo: author2Photo,
    },
  ];

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
          Le Cercle Industriel, plus communément abrégé « CI », est le cercle
          des étudiants de l’École Polytechnique de Louvain (EPL). Il regroupe
          ainsi l’ensemble des étudiants ingénieurs civils, ingénieurs civils
          architectes et étudiants en sciences informatiques. Cette ASBL
          étudiante, créée en 1872 à Leuven, a rejoint Louvain-la-Neuve en 1973,
          ce qui en fait la doyenne du genre sur ce site universitaire. Fort de
          ses années d’expériences, le Cercle Industriel est devenu une
          référence en matière de relations entre étudiants et faculté, ainsi
          qu’en matière d’animation estudiantine.
        </p>
        <p>
          La surface d’animation à proprement parler possède son entrée ruelle
          Saint Eloi. Cette première, ouverte à tous du dimanche au jeudi, en
          après midi comme en soirée, est donc un lieu de passage incontournable
          pour tout étudiant néo-louvaniste. Les mardis, l’animation est assurée
          en alternance par deux pôles : le Service d’Impression du Cercle
          Industriel (SICI) et le Contact Cercle Industriel Industries (CCII),
          deux collectifs étudiants (principalement ingénieurs civils et
          agronomes) très proches du Cercle Industriel.
        </p>
        <p>
          En plus des animations étudiantes proposées durant l’année, le Cercle
          Industriel participe activement à la vie facultaire. Dès lors, le CI
          n’est pas seulement un endroit de divertissement. Il est également un
          lieu où la communication, l’entraide et la serviabilité sont mises en
          avant. C’est pourquoi, depuis longtemps, une étroite collaboration est
          entretenue avec l’administration de l’École Polytechnique de Louvain.
          L’objectif principal étant d’améliorer la vie des étudiants sur le
          campus et les relations d’étudiants à étudiants et de faculté à
          étudiants. Dans ce cadre, le Cercle est, par exemple, responsable de
          la surveillance des examens d’entrée, de la bonne organisation des
          différents drinks facultaires ou encore de la promotion et de
          l’organisation d’un tournoi de football réunissant professeurs et
          étudiants. De plus, tout au long de l’année, plusieurs membres siègent
          au bureau des étudiants. Le CI s’occupe également de la cafétéria
          (K-Fet) située dans le hall Sainte Barbe, au cœur des auditoires et
          des locaux étudiants, de la rédaction du journal facultaire
          (Salopette), et de toute une série d’autres évènements majeurs de la
          vie estudiantine néo-louvaniste (Bal des Bleus, place des Wallons des
          24h vélos, Bal Saint-Valentin, ski durant la semaine blanche, Revue
          des Ingénieurs, etc.).
        </p>
      </motion.div>
      <Authors authors={authors} updateScroller={updateScroller} />
    </div>
  );
}
