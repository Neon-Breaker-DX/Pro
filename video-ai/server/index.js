const express = require('express');
const cors = require('cors');
const uploadRouter = require('./routes/upload');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/upload', uploadRouter);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
