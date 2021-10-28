import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import Headtitle from '../components/Headtitle';
import SalopetteText from '../components/Salopette/SalopetteText';

export default function Salopette({ updateScroller }) {
  return (
    <motion.div
      key="salopette"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Headtitle title="La Salopette" />
      <SalopetteText updateScroller={updateScroller} />
      <Banner
        line1="Contactez-nous. Contactez-nous. Contactez-nous. Contactez-nous. Contactez-nous."
        line2="Contactez-nous. Contactez-nous. Contactez-nous. Contactez-nous. Contactez-nous."
        link="/contact"
      />
    </motion.div>
  );
}
