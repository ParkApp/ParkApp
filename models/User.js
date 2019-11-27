const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  park:{type:Schema.Types.ObjectId,ref:'Park'},
  event:[{type:Schema.Types.ObjectId,ref:'Event'}]
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
