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
        line1="La Salopette. La Salopette. La Salopette. La Salopette. La Salopette. La Salopette."
        line2="La Salopette. La Salopette. La Salopette. La Salopette. La Salopette. La Salopette."
        link="/salopette"
      />
    </motion.div>
  );
}
