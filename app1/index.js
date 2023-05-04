const connection = require('./db/db.js');
const express = require("express");
const app = express();
const host =  "0.0.0.0"
const port = process.env.PORT || 3000;
const dockerode = require('dockerode');


app.get('/', (req, res) => {
connection.query('SELECT * FROM stars', (error, results) => {
if (error) {
console.log('Error fetching data from MySQL:', error);
res.send('Error fetching data from MySQL.');
} else {
console.log('Data fetched from MySQL:', results);
res.json(results);
}
});
});


app.listen(port,host,  ()=> {
    console.log('Server running at http://localhot :' + port);
})




