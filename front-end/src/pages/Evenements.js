import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import Headtitle from '../components/Headtitle';
import EvenementsText from '../components/Evenements/EvenementsText';

export default function Evenements({ updateScroller }) {
  return (
    <motion.div key="evenements" exit={{ opacity: 0 }}>
      <Headtitle title="Les événements du Cercle Industriel" />
      <EvenementsText updateScroller={updateScroller} />
      <Banner
        line1="Contactez-nous. Contactez-nous. Contactez-nous. Contactez-nous. Contactez-nous."
        line2="Contactez-nous. Contactez-nous. Contactez-nous. Contactez-nous. Contactez-nous."
        link="/contact"
      />
    </motion.div>
  );
}
