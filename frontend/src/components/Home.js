import React, { Suspense, lazy} from 'react';
import LandingPage from './LandingPage';
import Projects from './Projects';
import TerminalUI from './TerminalUI';

const HomePage = React.lazy(() => import('./LandingPage'));

function Home() {
  return (
    <>
    <HomePage/>
    <Projects/>
    <TerminalUI/>
    </>
  )
}

export default Home