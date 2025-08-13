const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

if (require.main === module) {
  app.listen(8081, '0.0.0.0', () => {
    console.log('App 2 running on 8081');
  });
}

module.exports = app;
