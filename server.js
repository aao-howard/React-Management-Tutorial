const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello', (req, res) => {
  res.send({message: 'Hello Express!'});
})

app.listen(port, () => console.log(`Listening on port ${port}`)); // 따옴표(') 가 아니라 특수문자(`) 를 사용한다.
