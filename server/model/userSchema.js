const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
	{
		displayName: String,
		uid: Number,
		userNum: Number,
	},
	{ collection: 'User' }
);

const Counter = mongoose.model('User', userSchema);
module.exports = { User };
