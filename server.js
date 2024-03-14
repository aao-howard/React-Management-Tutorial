const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// app.get('/api/hello', (req, res) => {
//   res.send({message: 'Hello Express!'});
// })

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://picsum.photos/id/1/64/48',
      name: 'Howard Yun',
      birthday: '961222',
      gender: 'Male',
      job: 'Student'
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/2/64/48',
      name: 'HC Yun',
      birthday: '961223',
      gender: 'Male',
      job: 'Programmer'
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/3/64/48',
      name: 'Webirang',
      birthday: '961224',
      gender: 'Female',
      job: 'Scientist'
    }
  ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`)); // 따옴표(') 가 아니라 특수문자(`) 를 사용한다.
