const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

if (require.main === module) {
  app.listen(8080, '0.0.0.0', () => {
    console.log('App 1 running on 8080');
  });
}

module.exports = app;
