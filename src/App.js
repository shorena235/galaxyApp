import React from 'react';
import Galaxy from './Galaxy';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Galaxy 
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
      />
    </div>
  );
}

export default App;
