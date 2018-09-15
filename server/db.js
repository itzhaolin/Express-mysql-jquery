var mysql = require('mysql') // 引入mysql模块

// 创建mysql实例
var connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '12345678',
    database: 'myApp'
})
connection.connect()


module.exports = connection