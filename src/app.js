import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';

const conectionString = 'mongodb+srv://tnnshop:82ISxqEstnoh6tZc@cluster0.pam8z.gcp.mongodb.net/test?retryWrites=true&w=majority';
var port = Number(process.env.PORT || 8888);
// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
import mainRoutes from './routes/main';

// set up mongoose
mongoose.connect(conectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log(error);
  });

 // set up route
app.use('/api/', mainRoutes);

// set up route
app.get('*', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project with Nodejs Express and MongoDB',
  });
});

app.get('/2', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project with Nodejs Express and MongoDB2',
  });
});
app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});
