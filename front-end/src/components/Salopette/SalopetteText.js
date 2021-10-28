import React from 'react';

import { motion } from 'framer-motion';

import Authors from '../Authors';
import SalopetteDownloadList from './SalopetteDownloadList';

export default function SalopetteText({ updateScroller }) {
  const authors = [
    {
      name: 'Nathan "Fafanculo" Magrofuoco',
      postes: 'Culture/anim 2016-17, Info/web 2015-16',
      photo: '2016-fafanculo.jpg',
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
          La Salopette est connue des plus anciens sous le diminutif de la
          Salop'. Avec un tel nom, on pourrait s'attendre au pire... Pourtant,
          la Salop' tire son origine de la « salopette », vêtement de travail
          bien connu de tous. Elle n'en est d'ailleurs que le diminutif, c'est
          pourquoi on prend l'habitude de l'écrire avec un apostrophe final : «
          Salop' ». Son histoire s'est quelque peu perdue dans les mémoires les
          plus anciennes du CI. Mais elle n'en demeure pas moins connue de tous
          les étudiants de l'Ecole Polytechnique de Louvain, alumnis comme
          jeunes bacheliers.
        </p>
        <p>
          La Salop' est qualifiée de mardimadaire car elle est distribuée tous
          les mardis dans le hall Sainte Barbe. Les étudiants peuvent alors
          déguster sa richesse littéraire, humouristique et érotique. Car, oui,
          la Salop' est un recueil de poésies, de subtilités, de blagues
          salaces, de petits jeux divertissants et de femmes légèrement
          dénudées.
        </p>
        <p>
          Bien que son caractère masculin et « cerclard » lui soient souvent
          reprochés, la Salop' se veut tout public. En effet, tous les membres
          de l'EPL sont invités à lire cette dernière, qu'ils soient professeurs
          ou étudiants, baptisés ou non, hommes ou femmes. Notons cependant que
          la Salop' étant rédigée par les vice-infos du CI, certaines « private
          jokes » peuvent subsister au sein des articles reliés à la vie
          quotidienne du cercle.
        </p>
        <p>
          L'une des fiertés de la Salop' est qu'elle est imprimée exclusivement
          au CI, et non, comme la plupart des autres cercles ou institutions,
          par des professionnels. Pensées spéciales à Roger, également surnommé
          Daniel, ou plus communément Tabata, notre « offset », qui nous a
          supporté durant maintes et maintes années.
        </p>
        <p>
          Depuis le début du millénaire, la Salop' est également disponible sur
          Internet afin de limiter le nombre d'impressions et d'archiver son
          contenu.
        </p>
        <SalopetteDownloadList updateScroller={updateScroller} />
      </motion.div>
      <Authors authors={authors} updateScroller={updateScroller} />
    </div>
  );
}
