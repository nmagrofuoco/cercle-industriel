import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import axios from 'axios';

import Banner from '../components/Banner';
import Headtitle from '../components/Headtitle';
import ComitesPostesList from '../components/Comites/ComitesPostesList';
import ComitesList from '../components/Comites/ComitesList';

export default function Comites({ updateScroller }) {
  const { year } = useParams();
  const [data, setData] = useState({
    comites: null,
    selectedYear: null,
    currentIndex: null,
  });

  useEffect(() => {
    axios.get('/api/comites').then(res => {
      let selectedYear =
        year === undefined ? res.data[res.data.length - 1].year : year;
      let currentIndex = res.data.findIndex(
        comite => comite.year === selectedYear
      );
      // if comité is unknown, return the last one
      if (currentIndex === -1) {
        selectedYear = res.data[res.data.length - 1].year;
        currentIndex = res.data.length - 1;
      }
      setData({
        comites: res.data,
        selectedYear: selectedYear,
        currentIndex: currentIndex,
      });
    });
  }, [year]);

  if (!data.comites && !data.selectedYear && !data.currentIndex) return null;
  return (
    <motion.div key="data.comites" exit={{ opacity: 0 }}>
      <Headtitle
        title={
          data.comites[data.currentIndex].name +
          ' (' +
          data.comites[data.currentIndex].year +
          ')'
        }
      />
      <ComitesPostesList
        year={data.selectedYear}
        updateScroller={updateScroller}
      />
      <ComitesList comites={data.comites} current={data.currentIndex} />
      <Banner
        line1="Les pôles. Les pôles. Les pôles. Les pôles. Les pôles. Les pôles. Les pôles."
        line2="Les pôles. Les pôles. Les pôles. Les pôles. Les pôles. Les pôles. Les pôles."
        link="/poles"
      />
    </motion.div>
  );
}
