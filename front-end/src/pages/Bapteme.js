import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import Headtitle from '../components/Headtitle';
import BaptemeText from '../components/Bapteme/BaptemeText';

export default function Bapteme({ updateScroller }) {
  return (
    <motion.div
      key="bapteme"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Headtitle title="Le baptême au Cercle Industriel" />
      <BaptemeText updateScroller={updateScroller} />
      <Banner
        line1="La calotte. La calotte. La calotte. La calotte. La calotte. La calotte."
        line2="La calotte. La calotte. La calotte. La calotte. La calotte. La calotte."
        link="/calotte"
      />
    </motion.div>
  );
}
