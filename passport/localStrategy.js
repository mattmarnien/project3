const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');


const strategy = new LocalStrategy(

	function(username, password, done) {
		db.User.findOne({ name: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, console.log('Incorrect username'))
			}
			if (!user.validPassword(password)) {
				return done(null, false, console.log('Incorrect password' ))
			}
			return done(null, user)
		})
	}
)

module.exports = strategy






