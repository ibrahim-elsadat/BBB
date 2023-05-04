const mysql = require('mysql');


const connection = mysql.createConnection({
    host: '172.19.0.2',
    user: 'sadat',
    password: '1234',
    database: 'mydb'
  });


connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
  });

module.exports=connection;