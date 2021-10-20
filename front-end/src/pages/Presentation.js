import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import Headtitle from '../components/Headtitle';
import PresentationText from '../components/Presentation/PresentationText';

export default function Presentation({ updateScroller }) {
  return (
    <motion.div key="presentation" exit={{ opacity: 0 }}>
      <Headtitle title="Présentation du projet" />
      <PresentationText updateScroller={updateScroller} />
      <Banner
        line1="L'histoire du cercle. L'histoire du cercle. L'histoire du cercle. L'histoire du cercle."
        line2="L'histoire du cercle. L'histoire du cercle. L'histoire du cercle. L'histoire du cercle."
        link="/histoire"
      />
    </motion.div>
  );
}
