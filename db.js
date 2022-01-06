const { Pool, Client } = require('pg')

module.exports = function () {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'test',
        password: 'idea',
        port: 5432,
    })
    function test() {
        pool.query('SELECT NOW()', (err, res) => {
            console.log(err, res)
        })
    }

    /*
    pool.query(
        "INSERT INTO accounts(user_id, username, password, email, created_on)VALUES($1, $2, $3, $4, to_timestamp($5))", [12345,"thiendong","thiendong","thiendong.iuh@gmail.com",new Date().getTime()/1000],
        (err, res) => {
            console.log(err, res);
            pool.end();
        }
    );
    */



    console.log("Done");

    this.Connect = function () {

    }
}
