const express = require('express');
const cors = require('cors');
const userMiddleware = require('./middlewares/user.middleware');

const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const cardRoutes = require('./routes/card.routes');

require('dotenv').config();
require('./config/db.config');

const app = express();

app.use(cors());
app.use(express.json({limit: "2mb"}));
app.use(bodyParser.urlencoded({limit: "2mb", extended: true}));
app.use(express.static("public"));

app.use('/auth', authRoutes);
app.use('/user', userMiddleware, userRoutes);
app.use('/card', userMiddleware, cardRoutes);

app.listen(process.env.PORT, process.env.LOCAL_IP_ADDRESS, (err) => {
  if(err) throw err;
  console.log(`server running on port ${process.env.PORT}`);
})
