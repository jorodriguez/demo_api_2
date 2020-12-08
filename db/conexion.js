
const Pool = require('pg').Pool

const dbParams = {
    user: 'oawfbcgxdiimbc',
    host: 'ec2-107-20-167-241.compute-1.amazonaws.com',
    database: 'de55f1cvhglsav',
    password: '06f8ef56b8f00bedce7408323613a150e25e41e8f3c7db39c1f344a57d0ae7bc',
    port: 5432,
    ssl: { rejectUnauthorized: false }
}

const pool = new Pool({
    user: dbParams.user,
    host: dbParams.host,
    database: dbParams.database,
    password: dbParams.password,
    port: dbParams.port,
    ssl: { rejectUnauthorized: false }
});

//Modularizamos y exportamos unicamente la constantes pool :)
module.exports = {
    pool
};