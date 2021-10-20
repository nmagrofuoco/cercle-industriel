import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import Description from '../components/Home/Description';
import Jumbotron from '../components/Home/Jumbotron';

export default function Home({ updateScroller }) {
  return (
    <motion.div key="home" exit={{ opacity: 0 }}>
      <Jumbotron updateScroller={updateScroller} />
      <Description />
      <Banner
        line1="Sexe and chopes. Sexe and chopes. Sexe and chopes. Sexe and chopes."
        line2="Sexe and chopes. Sexe and chopes. Sexe and chopes. Sexe and chopes."
      />
    </motion.div>
  );
}
