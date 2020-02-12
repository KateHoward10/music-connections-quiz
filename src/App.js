import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import RoundContainer from './RoundContainer';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const header = useRef(null);

  function handleScroll() {
    const headerHeight = header.current ? header.current.scrollHeight : null;
    setScrolled(headerHeight && window.pageYOffset >= headerHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <React.Fragment>
      <Header ref={header} />
      <RoundContainer scrolled={scrolled} />
    </React.Fragment>
  );
}

export default App;
