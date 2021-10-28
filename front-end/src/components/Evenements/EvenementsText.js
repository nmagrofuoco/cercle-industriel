import React from 'react';

import { motion } from 'framer-motion';

import Authors from '../Authors';

export default function BaptemeText({ updateScroller }) {
  const authors = [
    {
      name: 'Bastien Tagnon',
      postes: 'Kfet 2016-17, Guindaille 2017-18',
      photo: '2016-tagnon.jpg',
    },
    {
      name: 'Vincent Cattoir',
      postes: 'Bar 2015-16, Clash/web 2014-15',
      photo: '2014-vincent.jpg',
    },
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
          Les activités du Cercle Industriel s'articulent quotidiennement autour
          de sa surface d'animation, située ruelle Saint Eloi, et de sa
          cafétéria, dite « Kfet » et située au coeur des auditoires de l'Ecole
          Polytechnique de Louvain. Néanmoins, à diverses occasions de l'année
          académique, le CI se lance dans l'organisation d'événements de grande
          taille afin de diversifier son panel d'activités. Les plus réputés de
          ces événements ne sont autre que le Bal des Bleus, la Revue des
          Ingénieurs, ou encore la semaine blanche passée au ski avec plus de
          300 vacanciers. Cette page ne fournit qu'un bref aperçu des plus
          grands événements organisés par le CI. Le lecteur intéressé est donc
          chaleureusement invité à participer à la vie quotidienne du cercle
          afin de profiter des innombrables animations.
        </p>
        <h2>Surface d'animation</h2>
        <p>
          Tous les soirs du dimanche au jeudi et tous les midis du lundi au
          vendredi, la surface d'animation du Cercle Industriel vous ouvre ses
          portes. Venez profiter de notre bien aimée Stella pression, de notre
          catalogue de bières spéciales à prix démocratiques ainsi que de notre
          ambiance si chaleureuse/particulière ! Au fut, nous pouvons vous
          servir : Stella Artois, Hoegaarden Blanche ou Hoegaarden Rosée et
          Somersby. A certaines occasions sont également servies de la Leffe
          Blonde ou de la Triple Karmeliet. Notre catalogue est complété par une
          série de spéciales (en bouteille) : Barbãr, Chimay Blanche ou Bleue,
          Duvel, Hoegaarden Grand Cru, Kasteel Rouge, Leffe Blonde, Trappiste
          Rochefort 8 ou 10, Triple Karmeliet, Triple Westmalle et Vieux Temps.
          D'ailleurs, vous ne le saviez peut-être pas mais la Vieux Temps était
          jadis servie au fut comme « pils » dans notre bar bien aimé !
        </p>
        <h2>La Kfet</h2>
        <p>
          La Kfet est un véritable lieu de pélerinage pour les étudiants en
          quête d'un en-cas ou d’une boisson pour étancher leur soif. Cette
          cafétéria est destinée aux bourses les moins remplies. Elle est tenue
          par des étudiants, pour des étudiants et surtout avec des prix
          étudiants ! Un petit café pour survivre à votre prochain cours ? Un
          mars pour combler une petite fringale ? Ou encore un paquet de
          chewing-gum pour cacher l’haleine de la veille ? Vous trouverez de
          tout chez nous ! Et, à l’heure du diner, pas la peine de descendre en
          ville pour acheter un sandwiche onéreux, vous en trouverez des frais à
          10 mètres de votre auditoire de 11h30 jusque 14h. Trouver un sandwich
          de qualité à 1,60€ ailleurs ne sera pas chose aisée, on vous le
          garantit ! En dehors des horaires d’ouverture, nous mettons à votre
          disposition trois distributeurs, deux de boissons et un de snacks pour
          vous accompagner dans vos longues soirées d'étude. Plus qu’une
          sandwicherie, la Kfet est une salle lumineuse et agréable où vous
          pourrez manger, discuter et travailler durant les heures d’ouverture
          du hall Sainte Barbe. On ne vous demandera qu'une seule chose : les
          poubelles ne sont pas là pour décorer, ramassez vos déchets ! Il est
          également intéressant de rappeler que le service n'est pas réservé
          exclusivement aux membres du Cercle Industriel, tous les étudiants de
          la faculté sont acceptés avec joie.
        </p>
        <h2>Bal des Bleus</h2>
        <p>
          Le début de l'année est rythmée par les bleusailles, quatre semaines
          préparant les jeunes étudiants au rite du baptême, durant lesquelles
          le CI organise son célèbre Bal des Bleus en collaboration avec la
          Maison des Sciences (MDS). Le Bal des Bleus s'organise historiquement
          sur le parking Sainte Barbe, bien que les dernières éditions aient été
          organisées Place Galilée en raison de contraintes liées au terrorisme,
          puis à la pandémie de COVID-19. L'événement rassemble quelques
          milliers d'étudiants néo-louvanistes et d'ailleurs venus danser sur
          les sons endiablés de jeunes DJs Belges et internationaux.
        </p>
        <h2>Semaine de ski</h2>
        <p>
          La semaine dite « blanche » divise l'année académique en deux
          quadrimestres et tombe, dès lors, à la fin de la première session
          d'examens. A cette occasion, les cercles et régionales de l'Université
          propose à leurs sympathisants une semaine de vacances entièrement
          organisées afin d'y respirer l'air frais de la montagne. Au CI, cette
          semaine de ski rassemble plus de 300 étudiants chaque année. Le voyage
          se fait en autocar jusqu'aux plus grandes stations de France et
          d'ailleurs (le CI fut l'un des premiers à proposer un voyage dans la
          station de Andorre !). Sur place, le comité organisateur propose
          diverses activités en journée et le soir, dont les célèbres apéros aux
          pieds des pistes.
        </p>
        <h2>Bal Saint Valentin</h2>
        <p>
          Dès le retour des étudiants sur les bancs des auditoires, et suite à
          cette célèbre semaine de ski, le CI organise son Bal Saint Valentin en
          l'honneur des amoureux. Le bal est l'occasion de retrouver les
          étudiants dans un cadre plus grand et plus chic que la traditionnelle
          surface d'animation, et ils sont invités à s'habiller de
          circonstances. Mousseux et champagnes y sont également servis en
          supplément des boissons houblonnées tant aimées des étudiants afin de
          coller au cadre de la soirée. Le Bal Saint Valentin affiche complet
          chaque année, preuve de la réussite d'un tel événement.
        </p>
        <h2>Revue des Ingénieurs</h2>
        <p>
          La Revue des Ingénieurs est un spectacle satyrique amateur qui parodie
          entre autres les professeurs de l’Ecole Polytechnique de Louvain, les
          cours et la vie universitaire en général. Le spectacle se base sur un
          thème connu du grand public, différent chaque année, et est entrecoupé
          de musiques, de danses, ainsi que de petits sketchs comiques. La Revue
          est organisée dans sa quasi-totalité par des étudiants ingénieurs de
          l’Université catholique de Louvain et compte chaque année plus de 300
          participants. Depuis plus de 20 années consécutives, la Revue se joue
          sur la prestigieuse scène de l’Aula Magna à Louvain-la-Neuve durant
          trois soirs qui affichent toujours complets. Le thème de la Revue
          reste secret depuis le mois de septembre et n'est dévoilé que quelques
          semaines avant la première représentation par le célèbre vice-revue,
          membre du comité CI et responsable de l'organisation de cet événément
          immanquable de notre faculté.
        </p>
        <p className="more">
          <a
            href="https://revuedesingenieurs.be/"
            target="_blank"
            rel="noreferrer"
          >
            En savoir plus sur la Revue des Ingénieurs
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
