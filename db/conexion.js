
const Pool = require('pg').Pool

const dbParams = {
    user: 'zjjrbwydetxdpe',
    host: 'ec2-54-225-254-115.compute-1.amazonaws.com',
    database: 'dc8tfgel2mr3k8',
    password: '543c2e0b776c3bbd3f3f3743717a689a7c83f14b5a40c4f955e64e0efbae14cc',
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