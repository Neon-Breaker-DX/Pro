const express = require('express');

const router = express.Router();

router.post('/', async (_req, res) => {
  // TODO: Wire ffmpeg -> whisper -> ai pipeline
  res.json({ message: 'Upload route is ready.' });
});

module.exports = router;
