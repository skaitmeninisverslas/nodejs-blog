const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const connectFlash = require('connect-flash');

const app = new express();

mongoose.connect('mongodb+srv://mantas:testadmin@cluster0-qdqwd.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
  .then(() => console.log('You are now connected to Mongo'))
  .catch(err => console.error('Something went wrong', err))

const mongoStore = connectMongo(expressSession);

app.use(expressSession({
  secret: 'secret',
  store: new mongoStore({
    mongooseConnection: mongoose.connection
  }),
  resave: false,
  saveUninitialized: true
}));

app.use(connectFlash());
app.use(fileUpload());
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

require('./routes/routes')(app);

app.listen(4000, () => {
  console.log('App listening on port 4000')
});
