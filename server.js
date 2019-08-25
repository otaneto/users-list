const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const cors = require('cors');

const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  next();
});

const port = process.env.PORT || 5000;
app.listen(port);
