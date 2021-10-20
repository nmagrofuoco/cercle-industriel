import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import Headtitle from '../components/Headtitle';
import ComitesPostesList from '../components/Comites/ComitesPostesList';
import ComitesList from '../components/Comites/ComitesList';

export default function Comites({ updateScroller }) {
  const comites = [
    {
      year: '2009-10',
      name: 'CI Pieds sous Terre',
    },
    {
      year: '2010-11',
      name: 'La Vie est CI Rose',
    },
    {
      year: '2011-12',
      name: 'RéCIdive',
    },
    {
      year: '2012-13',
      name: 'Un Jet CI Vil',
    },
    {
      year: '2013-14',
      name: 'Les Homards de VinCI',
    },
    {
      year: '2014-15',
      name: 'CIffler en travaillant',
    },
    {
      year: '2015-16',
      name: 'Réveil DiffiCIle',
    },
    {
      year: '2016-17',
      name: "J'peux pas j'ai pisCIne",
    },
    {
      year: '2017-18',
      name: 'Veni Vidi ViCI',
    },
    {
      year: '2018-19',
      name: 'ProcrastinaCIon',
    },
    {
      year: '2019-20',
      name: 'Pain SauCIsse',
    },
    {
      year: '2020-21',
      name: 'Les Gardiens de la GalaxCIe',
    },
    {
      year: '2021-22',
      name: 'RésurrecCIon',
    },
  ];

  const { year } = useParams();
  let comiteIndex =
    year === undefined
      ? comites.length - 1 // by default, display the current comité
      : comites.findIndex(comite => comite.year === year);
  // unknwon year parameter, display the current comité
  if (comiteIndex === -1) comiteIndex = comites.length - 1;

  return (
    <motion.div key="comites" exit={{ opacity: 0 }}>
      <Headtitle
        title={
          comites[comiteIndex].name + ' (' + comites[comiteIndex].year + ')'
        }
      />
      <ComitesPostesList
        current={comiteIndex}
        updateScroller={updateScroller}
      />
      <ComitesList comites={comites} current={comiteIndex} />
      <Banner
        line1="Les pôles. Les pôles. Les pôles. Les pôles. Les pôles. Les pôles. Les pôles."
        line2="Les pôles. Les pôles. Les pôles. Les pôles. Les pôles. Les pôles. Les pôles."
        link="/poles"
      />
    </motion.div>
  );
}
