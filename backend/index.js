const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const cardRoutes = require('./routes/card.routes');
require('dotenv').config();
require('./config/db.config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/card', cardRoutes);

app.listen(process.env.PORT, "192.168.1.100", (err)=>{
  if(err) throw err;
  console.log(`server running on port ${process.env.PORT}`);
})
