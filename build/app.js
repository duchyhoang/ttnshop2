'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _main = require('./routes/main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');
var conectionString = 'mongodb+srv://tnnshop:82ISxqEstnoh6tZc@cluster0.pam8z.gcp.mongodb.net/test?retryWrites=true&w=majority';
var port = Number(process.env.PORT || 8888);
// set up dependencies
var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _morgan2.default)('dev'));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });


// set up mongoose
_mongoose2.default.connect(conectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(function () {
  console.log('Database connected');
}).catch(function (error) {
  console.log(error);
});

app.use(_express2.default.static(path.join(__dirname, '../client/build')));
// set up route
//app.use('/api/', mainRoutes);

// set up route

app.get('/api/name', function (req, res) {
  res.json({ name: 'hyhd1' });
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});

app.listen(port, function () {
  console.log('Our server is running on port ' + port);
});
//# sourceMappingURL=app.js.map