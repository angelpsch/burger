
var mysql = require('mysql');

var connection = mysql.createConnection({
        port: 3306,
        host: 'qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'hrblz1mdv12aahk8',
        password: 'kupayy8kc2hcslxk',
        database: 'putddvlat4bkzlmk'
    })



connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
