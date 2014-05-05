import mysql = require('mysql');

var config = {
    host: 'localhost',
    user: 'user',
    password: 'user',
};

var q = mysql.createQuery('SELECT * FROM user', function (err, rows, fields) {
});

var conn = mysql.createConnection(config);
conn.connect(function (err) {
    conn.query(q);
    conn.destroy();
});

var pool = mysql.createPool(config);
pool.getConnection(function (err, connection) {
    connection.query('SELECT * FROM user', function (err, rows) { });
    connection.release();
    pool.end();
});

var cluster = mysql.createPoolCluster({ canRetry: false,  removeNodeErrorCount: 1 });

cluster.add(config);

cluster.getConnection(function (err, connection) {
    connection.query('SELECT * FROM user', function (err, rows) { });
    connection.release();
    cluster.end();
});
