const express = require('express');

//Routers
const { userRouter } = require('./routes/usersRoutes');
const { repairRouter } = require('./routes/reapirsRoutes');

//Utils
const { db } = require('./utils/database');

//Init express app
const app = express();

//Enable incoming JSON data
app.use(express.json());

//Endpoints
app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairRouter);

db.authenticate()
  .then(() => console.log('Conexion exitosa!!'))
  .catch(err => console.log(err));

db.sync(/*{ force: true }*/)
  .then(() => console.log('creacion exitosa!!'))
  .catch(error => console.log(error));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Express app runing on port: ${PORT}!!`);
});
