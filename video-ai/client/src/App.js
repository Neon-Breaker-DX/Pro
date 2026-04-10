import React, { useState } from 'react';
import Upload from './components/Upload';
import Result from './components/Result';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 800, margin: '2rem auto' }}>
      <h1>Video AI</h1>
      <Upload onResult={setResult} />
      <Result data={result} />
    </div>
  );
}

export default App;
