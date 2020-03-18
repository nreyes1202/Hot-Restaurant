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
const tables = {
  "table1": {
    name: "example",
    email: "example@gmail.com",
    phonenumber: "(555)555-2121",
    tablenumber:3,
    iditem:"76"
  }
}

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

app.get('/reserve', function (request, response) {
  const viewHtmlPath = path.join(
    __dirname,
    'reserve.html'
  );
  console.log(viewHtmlPath);
  response.sendFile(viewHtmlPath);
});

app.get('/tables', function (request, response) {
    const viewHtmlPath = path.join(
      __dirname,
      'tables.html'
    );
    response.sendFile(viewHtmlPath);
    response.json(tables);
  });



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });