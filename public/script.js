const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const fs = require('fs');

// const fileName = 'view.html';

// const filePath = path.join(
//     __dirname,
//     fileName
// );

// console.log(filePath);
// const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
// console.log(fileContent);
app.get('/home', function (request, response) {
    const viewHtmlPath = path.join(
      __dirname,
      'home.html'
    );
    response.sendFile(viewHtmlPath);
});

app.get('/make', function (request, response) {
  const viewHtmlPath = path.join(
    __dirname,
    'make.html'
  );
  response.sendFile(viewHtmlPath);
});

app.get('/view', function (request, response) {
    const viewHtmlPath = path.join(
      __dirname,
      'view.html'
    );
    response.sendFile(viewHtmlPath);
  });



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });