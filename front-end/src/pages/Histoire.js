import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import Headtitle from '../components/Headtitle';
import HistoireText from '../components/Histoire/HistoireText';

export default function Histoire({ updateScroller }) {
  return (
    <motion.div key="histoire" exit={{ opacity: 0 }}>
      <Headtitle title="Un peu d'histoire..." />
      <HistoireText updateScroller={updateScroller} />
      <Banner
        line1="Les comités. Les comités. Les comités. Les comités. Les comités. Les comités."
        line2="Les comités. Les comités. Les comités. Les comités. Les comités. Les comités."
        link="/comites"
      />
    </motion.div>
  );
}
