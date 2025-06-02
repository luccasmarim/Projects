import React from 'react';

function App() {
  return (
    <div>
      <h1>Redirecionar para o Google</h1>
      <button onClick={() => window.location.href = 'https://www.google.com'}>
        Ir para o Google
      </button>
    </div>
  );
}

export default App;
