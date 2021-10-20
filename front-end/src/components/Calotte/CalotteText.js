import React from 'react';

import { motion } from 'framer-motion';

import Authors from '../Authors';

import vadeMecum from '../../files/vade-mecum-119-120.pdf';

export default function CalotteText({ updateScroller }) {
  const authors = [
    {
      name: 'Le jour et la nuit',
      postes: 'La nuit surtout et sur toutes...',
      photo: 'unknown-profile.jpg',
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
          La calotte est pour beaucoup un couvre-chef entouré de beaucoup de
          mystère et peut rendre les gens dubitatifs lorsqu’ils croisent un
          étudiant parfois éméché la portant aux petites heures. Cette coiffe,
          inspirée de la toque que portaient les zouaves pontificaux (bataillon
          qui défendit le Vatican au cours du XIXe siècle), est pourtant facile
          à déchiffrer ; elle constitue une véritable carte d’identité du
          calottin. Elle est très riche d'histoire et véhicule certaines valeurs
          chères à beaucoup d'étudiants. A Louvain-la-Neuve, on dissocie
          entièrement la calotte du baptême, et l'obtention de ce couvre-chef se
          fait suivant un cheminement bien spécifique.
        </p>
        <p>
          Cet apprentissage passant par la pratique, il ne faut jamais hésiter à
          demander à un étudiant calotté de pouvoir lire sa calotte. Il est fort
          à parier que celui-ci vous décrive avec passion son contenu ! Il vous
          racontera plus que probablement la façon dont on obtient une calotte,
          depuis la lettre de motivation à rendre au Grand-maître (au CI, on
          l'appelle le vice-guindaille) jusqu’au jour J de la corona (assemblée
          de calottins réunis pour accueillir des nouveaux membres, où la
          calotte se fait «dépuceler» et devient digne d’être portée par le
          nouveau calottin), en passant par la phase de préparation avec
          l’apprentissage des chants et des formules latines qui sont employées
          en corona, la composition de une ou plusieurs guindailles, etc.
        </p>
        <p>
          On comprend bien vite que la famille des calottins est constituée
          d’une « très grande bande de potes » partageant de mêmes valeurs et
          qui se réunissent entre eux pour s’amuser et gardent surtout un grand
          esprit d’ouverture !
        </p>
        <p>
          Quelques ouvrages de référence peuvent aider les plus curieux à en
          apprendre plus sur le passage de la calotte au sein du Cercle
          Industriel. Parmi ces ouvrages, le Bitu Magnifique receuille la
          plupart des chants folkloriques estudiantins entonnés à l'Université
          catholique de Louvain. Il reprend également un bréviaire du folklore
          calottin. Le Bitu Magnifique peut être acheté tous les jours de la
          semaine de 13h à 14h au Cercle Industriel.
        </p>
        <p className="more">
          <a href={vadeMecum} download>
            Préparer sa corona avec le Vade Mecum de l'impétrant
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
