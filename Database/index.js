const mysql = require('mysql');
const connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:'root',
    database:"estockpile",
    port:3306,
    multipleStatements:true
})
module.exports.connection = connection;