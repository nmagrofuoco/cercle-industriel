import { useEffect } from 'react';
import { motion } from 'framer-motion';

import Banner from '../components/Banner';
import ContactLocationList from '../components/Contact/ContactLocationList';
import ContactMailList from '../components/Contact/ContactMailList';
import Headtitle from '../components/Headtitle';

export default function Contact({ updateScroller }) {
  useEffect(() => {
    updateScroller();
  });
  return (
    <motion.div key="contact" exit={{ opacity: 0 }}>
      <Headtitle title="Contactez-nous par mail..." />
      <ContactMailList />
      <Headtitle title="... Ou par courrier" />
      <ContactLocationList />
      <Banner
        line1="Sexe and chopes. Sexe and chopes. Sexe and chopes. Sexe and chopes."
        line2="Sexe and chopes. Sexe and chopes. Sexe and chopes. Sexe and chopes."
      />
    </motion.div>
  );
}
