// const mysql = require('mysql2');

// class Database {
//   constructor() {
//     if (Database.instance) {
//       return Database.instance;
//     }

//     this.connection = null;
//     Database.instance = this;

//     this.initialize();
//   }

//   initialize() {
//     try {
//       this.connection = mysql.createPool({
//         host: 'reservation-sql-srv',
//         user: 'root',
//         password: '1234',
//         database: 'reservation',
//         waitForConnections: true,
//         connectionLimit: 10,
//         queueLimit: 0,
//       });

//       // Test the connection to ensure it's working
//       this.connection.query('SELECT 1', (err, results) => {
//         if (err) {
//           console.error('Error connecting to the database:', err);
//           // Handle the error (e.g., retry logic, fallback)
//         } else {
//           console.log('Database connection is successful.');
//         }
//       });
//     } catch (error) {
//       console.error('Error initializing the database connection pool:', error);
//       // Handle initialization error (e.g., retry logic, exit process)
//     }
//   }

//   getConnection() {
//     if (!this.connection) {
//       throw new Error('Database connection not initialized.');
//     }
//     return this.connection;
//   }
// }

// module.exports = new Database();
