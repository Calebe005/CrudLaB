import mysql from "mysql2/promise";

const poll = mysql.createPool({
  host: "localhost",
  password: `${process.env.BD_PASS}`,
  database: "login2",
  user: "root",
  connectionLimit: 10,
});

export default poll;
