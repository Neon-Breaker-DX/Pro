import React from 'react';

function Result({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2>Result</h2>
      <pre style={{ background: '#f5f5f5', padding: '1rem' }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default Result;
