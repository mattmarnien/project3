const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');


const strategy = new LocalStrategy(

	function(username, password, done) {
		db.User.findOne({ name: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				console.log('Incorrect username')
				return done(null, false, {message: 'Incorrect username'})
			}
			if (!user.validPassword(password)) {
				console.log('incorrect password')
				return done(null, false, {message: 'Incorrect password'})
			}
			return done(null, user)
		})
	}
)

module.exports = strategy






