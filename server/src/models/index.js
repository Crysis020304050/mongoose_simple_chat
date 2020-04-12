const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/fc_test3', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.User = require('./User.js');
module.exports.Chat = require('./Chat.js');
module.exports.Message = require('./Message.js');
