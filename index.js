import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => (res.sendFile("Hello World!")));

app.listen(PORT, () => console.log('Server running on port: http://localhost:5000'));

const sequelize = new Sequelize({
    dialect: 'mssql',
    storage: 'path/to/database.sqlite'
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }