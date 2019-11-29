const mysql = require('promise-mysql');

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    connectionLimit: process.env.DB_CONNECTION_LIMIT
}

module.exports = async () => {
    try {
        let pool, con;
        if (pool) con = pool.getConnection();
        else {
            pool = await mysql.createPool(dbConfig);
            con = pool.getConnection();
        }
        return con;
    } catch(ex) {
        throw ex;
    }
}