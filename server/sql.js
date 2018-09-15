var sqlMap = {
    user: {
        login: 'SELECT * FROM user where name =  ? and psw=?;',
        add: 'insert into user (name,psw) values (?,?)'
    }
}

module.exports = sqlMap