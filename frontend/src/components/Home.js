import React, { Suspense, lazy, useState, useContext, createContext } from 'react';
import LandingPage from './LandingPage';
import Projects from './Projects';
import TerminalUI from './TerminalUI';

export const EventContext = createContext([]);
const HomePage = React.lazy(() => import('./LandingPage'));

function Home() {
  const [event, setEvent] = useState([]);
  return (
    <>
    <EventContext.Provider value={[event, setEvent]}>
      <LandingPage/>
      <Projects/>
      <TerminalUI/>
    </EventContext.Provider>
    </>
  )
}

export default Home