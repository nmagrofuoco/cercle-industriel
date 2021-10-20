import React from 'react';

import { motion } from 'framer-motion';

import Authors from '../Authors';

export default function PresentationText({ updateScroller }) {
  const authors = [
    {
      name: 'Un ancêtre respectable',
      postes: 'Il y a fort fort longtemps...',
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
          Le Cercle Industriel n'est pas tout jeune. Ce beau bébé est né dans
          l'environnement très favorable de l'Université catholique de Louvain,
          alors sise en la bonne ville de Leuven. Il est né de parents
          multiples, à la fois des étudiants et des professeurs, en l'an de
          grâce 1872. Sa conception, au sens figuré du terme, était le fruit
          d'une réflexion profonde sur les études aux Ecoles Spéciales (il
          s'agit de l'Ecole Polytechnique de Louvain, également appelée faculté
          des Sciences Appliquées jusqu'en 1961). Plus précisément, cette
          réflexion portait sur le fait que ces études étaient beaucoup trop
          théoriques, et que les étudiants sortants se trouvaient fort dépourvus
          au moment d'affronter les dures réalités de la vie professionnelle.
        </p>
        <p>
          Ce petit groupe d'irréductibles décida alors d'inviter des
          industriels, des ingénieurs qui ne travaillaient pas à l'Université,
          afin de compléter ce curriculum par quelques conférences mettant en
          évidence les cotés plus pratiques de la formation et certaines
          applications particulières. C'est ce côté "pratique", ou encore
          "industriel" qui lui valût la dénomination de Cercle Industriel, ou en
          abrégé : « CI ».
        </p>
        <p>
          Le premier président de ce nouveau cercle était un professeur de la
          faculté. C'est bien compréhensible au vu des buts que le CI s'était
          fixés. De nos jours, ce n'est plus vraiment le cas... Quoiqu'il serait
          surement intéressant de voir l'un ou l'autre professeur faire son
          à-fond d'un litre avant de devoir montrer ses c......s aux étudiants
          en délire... Mais n'anticipons pas, et revenons à nos moutons, et à la
          genèse de notre vénérable et vénéré cercle...
        </p>
        <p>
          Jusqu'à la première guerre mondiale, les activités du CI se bornèrent
          à cela et le nombre de membres n'excéda pas la cinquantaine. Les
          activités furent restreintes durant l'occupation et on assista après
          guerre à la naissance des premières revues des ingénieurs, pièces de
          théâtre pastiches, qui n'étaient cependant pas (encore) organisées par
          le CI.
        </p>
        <p>
          Le passage à Louvain-La-Neuve fut assez douloureux, mais le CI se
          redressa bien vite, lançant les grandioses 24h vélo, proposa sans
          interruption une revue d'excellente qualité (encore aujourd'hui
          d'ailleurs) et diversifia ses activités avec la création de nombreux
          pôles, dont le Service d’Impression du Cercle Industriel (SICI), le
          Contact Cercle Industriel Industries (CCII) et le Contact Europe
          Cercle Indisutriel (CECI) qui sont encore actifs à ce jour, et de
          nombreuses festivités (Bal des Bleus, Bal Saint Valentin, ski durant
          la semaine blanche,etc.).
        </p>
        <p>
          Dans le milieu des années 80, inspiré par la patronne des ingénieurs
          et désireux de moderniser les anciennes pratiques de l'Ordre
          Académique de Saint Michel, l'Academicus Sanctae Barbae Ordo (Ordre
          Académique de Sainte Barbe, dit ASBO) est fondé par des membres
          assidus du CI qui en deviendront également comitards : vice-guindaille
          88-89 (Roald), président 88-89 (Vancou) et vice-guindaille 86-87
          (Skiltz). L'ASBO contribua grandement à relancer et à moderniser le
          folklore estudiantin - les coronae et nombre de chants entre autres -
          tombé en désuétude depuis le "transfert en ambulance" de Leuven à LLN.
        </p>
        <p>
          Encore une fois pendant les années 80, le CI a également été à la base
          de la création du GCL, le Groupement des Cercles de Louvain. Après un
          faux départ suivi de quelques années de disparition, le GCL a
          réellement pris son essor au début des années nonante, sous
          l'impulsion de Fredo, notre digne président 89-90. Se sont ensuite
          succédés une série de présidents issus du CI, et ce pour le plus grand
          bien de tout le monde. Mais il faut parfois pouvoir passer la main, et
          c'est ce que le CI a fait en 1996 en passant la présidence à un...
          agronome.
        </p>
        <p>
          Des générations et des générations d'ingénieurs sont passés par le CI,
          et bien d'autres encore viendront, faisant évoluer chaque année le
          rôle, les activités et le potentiel du « plus grand cercle de
          l'univers », comme ses membres aiment à nous le rappeler.
        </p>
      </motion.div>
      <Authors authors={authors} updateScroller={updateScroller} />
    </div>
  );
}
