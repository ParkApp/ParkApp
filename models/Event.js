const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  description: String,
  date: String,
  email: [String],
  park: { type: Schema.Types.ObjectId, ref: 'Park' },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;