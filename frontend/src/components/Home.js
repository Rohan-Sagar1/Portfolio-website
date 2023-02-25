import React, { Suspense, lazy, useState, useEffect} from 'react';
import LandingPage from './LandingPage';
import Projects from './Projects';
import TerminalUI from './TerminalUI';

const HomePage = React.lazy(() => import('./LandingPage'));

function Home() {
  return (
    <>
      <LandingPage/>
      <Projects/>
      <TerminalUI/>
    </>
  )
}

export default Home