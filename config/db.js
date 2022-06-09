import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '@Lunbel1203@',
    port: 3306,
    database: 'presuappdb'
});

export { pool };