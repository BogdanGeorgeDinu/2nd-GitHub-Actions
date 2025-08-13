import { useState } from 'react';

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  return (
    <main>
      <button onClick={() => setHelpVisible((v) => !v)}>
        {helpVisible ? 'Hide Help' : 'Show Help'}
      </button>
      {helpVisible && <div>Help is visible!</div>}
    </main>
  );
}

export default MainContent;