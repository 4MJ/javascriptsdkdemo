import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Backend working');
});
app.listen(port, err => {
  if (err) {
    console.error(err);
  }
  console.log(`server is listening on http://localhost:${port}`);
});