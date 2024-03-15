const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mssql = require('mssql');
const mssqlConfig = {
  server: conf.server,
  port: conf.port,
  database: conf.database,
  user: conf.user,
  password: conf.password,
  pool: {
    max: 50,
    min: 10,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false,
    trustServerCertificate: false
  }
}
// mssql.connect(mssqlConfig);
mssql.connect(mssqlConfig, err => {
  if (err) {
    throw err;
  }
  console.log(`Connection Successful~!`);
})

const multer = require('multer');
const exp = require('constants');
const upload = multer({dest: './upload'});

// app.get('/api/hello', (req, res) => {
//   res.send({message: 'Hello Express!'});
// })

app.get('/api/customers', (req, res) => {
  // res.send([
  //   {
  //     id: 1,
  //     image: 'https://picsum.photos/id/1/64/48',
  //     name: 'Howard Yun',
  //     birthday: '961222',
  //     gender: 'Male',
  //     job: 'Student'
  //   },
  //   {
  //     id: 2,
  //     image: 'https://picsum.photos/id/2/64/48',
  //     name: 'HC Yun',
  //     birthday: '961223',
  //     gender: 'Male',
  //     job: 'Programmer'
  //   },
  //   {
  //     id: 3,
  //     image: 'https://picsum.photos/id/3/64/48',
  //     name: 'Webirang',
  //     birthday: '961224',
  //     gender: 'Female',
  //     job: 'Scientist'
  //   }
  // ]);

  mssql.query(
    "SELECT * FROM dbo.testCustomer WHERE isDeleted = 0 ORDER BY id DESC",
    (err, results) => {
      res.send(results.recordset);
    }
  );
})

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let sql = `INSERT INTO dbo.testCustomer VALUES ( '${image}', '${name}', '${birthday}', '${gender}', '${job}', 0, GETDATE(), GETDATE() )`;
  // console.log(image);
  // console.log(name);
  // console.log(birthday);
  // console.log(gender);
  // console.log(job);
  // console.log(sql);
  mssql.query(
    sql,
    (err, results) => {
      res.send(results.rowsAffected);
      console.log(`INSERT results.rowsAffected: ${results.rowsAffected}`);
      // console.log(err);
    }
  )
})

app.delete('/api/customers/:id', (req, res) => {
  let id = req.params.id;
  let sql = `UPDATE dbo.testCustomer SET isDeleted = 1, modifydate = GETDATE() WHERE id = '${id}'`;
  mssql.query(
    sql,
    (err, results) => {
      res.send(results.rowsAffected);
      console.log(`UPDATE results.rowsAffected: ${results.rowsAffected}`);
    }
  )
})

// app.listen(port, () => console.log(`Listening on port ${port}`)); // 따옴표(') 가 아니라 특수문자(`) 를 사용한다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
