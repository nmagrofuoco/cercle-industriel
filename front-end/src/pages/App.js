import { useEffect, useRef, useState } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import LocomotiveScroll from 'locomotive-scroll';

import Bapteme from './Bapteme';
import Calotte from './Calotte';
import Comites from './Comites';
import Contact from './Contact';
import Evenements from './Evenements';
import Home from './Home';
import Histoire from './Histoire';
import Poles from './Poles';
import Presentation from './Presentation';
import Salopette from './Salopette';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import MobileNavbar from '../components/MobileNavbar';

export default function App() {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const location = useLocation();
  const history = useHistory();

  // locomotive-scroll
  let scroller = useRef(null);
  useEffect(() => {
    scroller.current = new LocomotiveScroll({
      el: document.querySelector('.scroller'),
      getDirection: true,
      smooth: true,
      reloadOnContextChange: true,
    });
    scroller.current.on('scroll', instance => {
      document.documentElement.setAttribute(
        'data-direction',
        instance.direction
      );
    });
    return () => {
      scroller.current.destroy();
    };
  });
  const startScroller = () => {
    if (scroller.current) scroller.current.start();
  };
  const updateScroller = () => {
    if (scroller.current) scroller.current.update();
  };
  const stopScroller = () => {
    if (scroller.current) scroller.current.stop();
  };

  // check if first time app is mounted
  useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });
    return unlisten;
  }, [history, isFirstMount]);

  return (
    <div>
      <MobileNavbar startScroller={startScroller} stopScroller={stopScroller} />
      <div data-scroll-container className="scroller">
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/contact">
              <Contact updateScroller={updateScroller} />
            </Route>
            <Route path="/salopette">
              <Salopette updateScroller={updateScroller} />
            </Route>
            <Route path="/evenements">
              <Evenements updateScroller={updateScroller} />
            </Route>
            <Route path="/calotte">
              <Calotte updateScroller={updateScroller} />
            </Route>
            <Route path="/bapteme">
              <Bapteme updateScroller={updateScroller} />
            </Route>
            <Route path="/poles">
              <Poles updateScroller={updateScroller} />
            </Route>
            <Route path="/comites/:year">
              <Comites updateScroller={updateScroller} />
            </Route>
            <Route path="/comites">
              <Comites updateScroller={updateScroller} />
            </Route>
            <Route path="/histoire">
              <Histoire updateScroller={updateScroller} />
            </Route>
            <Route path="/presentation">
              <Presentation updateScroller={updateScroller} />
            </Route>
            <Route path="/">
              <Home updateScroller={updateScroller} />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}
