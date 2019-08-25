const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const cors = require('cors');
const history = require('connect-history-api-fallback');

const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

app.use(cors());

app.use(history({
  disableDotRule: true,
  verbose: true
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  next();
});

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
