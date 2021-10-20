import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import Headtitle from '../components/Headtitle';
import PolesText from '../components/Poles/PolesText';

export default function Poles({ updateScroller }) {
  return (
    <motion.div key="poles" exit={{ opacity: 0 }}>
      <Headtitle title="Les pôles du Cercle Industriel" />
      <PolesText updateScroller={updateScroller} />
      <Banner
        line1="Le baptême. Le baptême. Le baptême. Le baptême. Le baptême. Le baptême."
        line2="Le baptême. Le baptême. Le baptême. Le baptême. Le baptême. Le baptême."
        link="/bapteme"
      />
    </motion.div>
  );
}
