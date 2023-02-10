const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
  res.send(`
    <form action="/submit-form" method="post">
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="age" placeholder="Age" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit-form', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`HEllo!, ${name}, you are ${age} years old.`);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
