import React from 'react';

import { motion } from 'framer-motion';

import Authors from '../Authors';

import authorPhoto from '../../img/unknown-profile.jpg';
import protocoleBapteme from '../../files/protocole_bapteme.pdf';

export default function BaptemeText({ updateScroller }) {
  const authors = [
    {
      name: 'Un ancêtre respectable',
      postes: 'Il y a fort fort longtemps...',
      photo: authorPhoto,
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
        <p>Salut les jeunes,</p>
        <p>Cher peut-être futur bleu, cher visiteur curieux, chère Maman,</p>
        <p>
          Avec un peu de chance, vous allez entamer les études les plus
          grandioses qui existent, et de ce fait une nouvelle vie d’étudiant
          jalonnée de cours, TPs, rapports à rendre, boules de profs à lécher et
          bla-bla-bla. Mais c’est tout pour la poésie car, comme on dit chez
          nous, « pour les étudiants, ce n’est pas une vie que de toujours
          bosser et travailler ». C’est pourquoi nos prédécesseurs ont créé le
          Cercle Industriel (il y a plus de 140 ans, comme quoi en 1872, on
          avait déjà les mêmes préoccupations). Parmi les nombreuses activités
          et événements qui font la marque du Cercle Industriel, le baptême est
          souvent le premier contact des nouveaux arrivants avec la vie
          extra-académique que constituent la guindaille et le folklore
          étudiant.
        </p>
        <p>
          Le meilleur moyen de se faire une idée de ce que suppose le baptême
          est certainement de venir en parler avec des gens qui l’ont fait. La
          première constatation est probablement que personne ne regrette cette
          expérience. Même s’il y a des moments difficiles, les souvenirs que
          l’on garde du baptême et des bleusailles (période précédant le
          baptême) restent à jamais gravés dans les mémoires.
        </p>
        <p>
          En effet, l’expérience du baptême est surtout à envisager comme une
          source d’amusement, de rencontres et d’intégration -par party- parmi
          les étudiants de première année, et de manière plus large parmi les
          étudiants de l’EPL (de sa faculté, de sa région pour rester général).
          Elle est donc intéressante car elle permet de se tisser un bon réseau
          de connaissances, même parmi les étudiants plus âgés, chose qui peut
          faciliter ce que certains appellent le parrainage académique (pratique
          pour les tuyaux aussi). Disons aussi ce qui est : c’est également se
          faire de très bons potes avec qui guindailler.
        </p>
        <p>
          C’est pourquoi (auto-)dérision et second degré sont les maîtres-mots
          de la plupart des étudiants baptisés ; c’est d’ailleurs dans cette
          optique-là que se déroulent les activités de bleusailles. Celles-ci
          sont aussi parfois axées sur le dépassement de soi et la solidarité
          qui peut se développer entre bleus. Ce n’est pas le but ici d’énoncer
          des détails pratiques, nous t’invitons donc à venir nous poser tes
          éventuelles questions, c’est toujours un plaisir d’y répondre autour
          d’une bonne mousse.
        </p>
        <p>
          A propos de la crainte type : « je ne veux pas rater mon année, je
          n’arriverai pas à concilier études et baptême », il faut savoir que,
          au CI, l’horaires des activités de bleusailles est calqué sur
          l’horaire de cours de 1ère bac d’ingénieur civil. Le pourcentage de
          réussite est a priori identique parmi les étudiants baptisés ou non.
          Ce ne sont pas ces 4 semaines qui vont être source de décrochage, et
          comme dirait mon feu Grand-Papa, ce qui tue l’étude, ce n’est pas la
          guindaille, c’est la glande.
        </p>
        <p>
          Venons-en aux débordements : tout ce que vous avez pu entendre est
          très probablement un amas de bêtises profanées par des gens n’ayant
          pas profité de l’expérience du baptême néo-louvaniste. Voilà une
          affirmation qui peut paraître bien radicale. Mais à LLN, le baptême et
          les bleusailles sont réglementés par l’Université (ce qui n’est pas le
          cas ailleurs) ; ils sont supervisés par des étudiants ayant suivi des
          formations, des gens qui ont suffisamment de recul par rapport à leur
          propre baptême pour savoir ce qu’ils font. Le jeu que constituent les
          activités a donc un cadre bien défini, et savoir faire la part des
          choses est également important à nos yeux. Tout ce que vous risquez,
          c’est de vous amuser un bon coup.
        </p>
        <p>
          C’est en général après le baptême que l’on se rend compte des
          opportunités que celui-ci nous a offertes. Il existe à
          Louvain-la-Neuve et en particulier au sein des cercles une multitude
          de projets plus intéressants les uns que les autres, et de plus ou
          moins grande ampleur. Les responsabilités que cela engendre sont très
          formatrices vis-à-vis de l’étudiant. Avoir fait son baptême est une
          très bonne manière de voir l’envers du décor et d’avoir ainsi envie de
          s’investir.
        </p>
        <p>
          En bref, il y a certes des obstacles à surmonter, mais le baptême est
          principalement une porte d’entrée du monde du folklore estudiantin, un
          moyen de souder des liens très forts avec de nouvelles personnes et de
          s’investir par la suite dans de nombreux projets intéressants en
          compagnie de gens péta-drôles (nous et bientôt vous).
        </p>
        <p className="more">
          <a href={protocoleBapteme} download>
            Lire le protocole d’accord entre les autorités et les étudiants de
            l’UCL
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
      <Authors authors={authors} updateScroller={updateScroller} />
    </div>
  );
}
