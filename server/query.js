import oracledb from 'oracledb';
import config from "./config.js";

//let st = `select * from AIRPORT`; //input string for testing

async function query(statement){
    let connection;
    let result;
    try{
        connection = await oracledb.getConnection({ user: config.user, password: config.password, connectionString: config.connectionString });
        console.log("Successfully connected to Oracle Database");

        result = await connection.execute(statement, [], {outFormat: oracledb.OUT_FORMAT_OBJECT});
        //console.log(result);

        return result.rows;
    }
    catch (e) {
        console.log(e);
    }
    finally{
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}

//query(st); //function call for testing

export default query;