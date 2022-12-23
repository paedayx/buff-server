import { Injectable } from '@nestjs/common';
const mysql = require('mysql2');

@Injectable()
export class UserService {
  async getUserById(id: string): Promise<any> {
    try {
      let connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'buff_db',
        multipleStatements: true,
      });
      const res = new Promise((res, rej) => {
        const query = `SELECT firstname, lastname FROM users WHERE users.id = ${id}`;
        console.log(query);
        connection.query(query, (e, results) => {
          console.log(e);
          res(results);
        });
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getUserByUsername(username: string): Promise<any> {
    try {
      let connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'buff_db',
        multipleStatements: true,
      });
      const res = new Promise((res, rej) => {
        const query = `SELECT firstname, lastname FROM users WHERE users.username = '${username}'`;
        console.log(query);
        connection.query(query, (e, results) => {
          console.log(e);
          res(results);
        });
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
}
