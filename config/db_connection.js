var mySql = require('mysql');

var connMySQL= function(){
   
    return mySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '635241aa',
        database: 'portal_noticias'
    });
}
module.exports = function(){
   
    return connMySQL;
};

