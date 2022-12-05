import oracledb from 'oracledb';
import config from "./config.js";
/*
let st = `select * from(
select "Monthly_Cases", to_date(to_char("Year") || to_char("Month") || '01', 'yyyy/mm/dd') as "Date" from(
select sum(cases) as "Monthly_Cases", to_char(true_date, 'MM') as "Month", to_char(true_date, 'YYYY') as "Year" from casedata
where iso_code = 'ABW'
group by to_char(true_date, 'MM'), to_char(true_date, 'YYYY')
order by to_char(true_date, 'YYYY'), to_char(true_date, 'MM') asc))
`; //input string for testing */

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