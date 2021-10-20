import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import Headtitle from '../components/Headtitle';
import CalotteText from '../components/Calotte/CalotteText';

export default function Calotte({ updateScroller }) {
  return (
    <motion.div
      key="calotte"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Headtitle title="La calotte au Cercle Industriel" />
      <CalotteText updateScroller={updateScroller} />
      <Banner
        line1="Nos événements. Nos événéments. Nos événéments. Nos événements. Nos événéments."
        line2="Nos événements. Nos événéments. Nos événéments. Nos événements. Nos événéments."
        link="/evenements"
      />
    </motion.div>
  );
}
