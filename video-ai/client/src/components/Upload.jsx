import React from 'react';

function Upload({ onResult }) {
  const handleFakeUpload = () => {
    onResult({
      message: 'Upload stub complete',
      summary: 'This is a placeholder until API wiring is done.'
    });
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <button type="button" onClick={handleFakeUpload}>
        Upload Video
      </button>
    </div>
  );
}

export default Upload;
