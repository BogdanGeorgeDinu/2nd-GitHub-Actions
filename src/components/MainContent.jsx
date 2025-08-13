import { useState } from 'react';
import HelpArea from './HelpArea';

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main data-testid="main-content">
      <h1>Welcome to our Test Project</h1>
      <button onClick={toggleHelp} aria-label="toggle help">
        {helpVisible ? 'Hide' : 'Show'} Help
      </button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;