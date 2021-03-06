// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

keystone.init({
	'name': 'My Site',
	'brand': 'My Site',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',
	'mongo': process.env.MONGO_URI,
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'Admin',
});
keystone.import('models');
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});
keystone.set('routes', require('./routes'));

keystone.set('nav', {
	admins: 'admins',
	Candidate: 'Candidate',
	Employee: 'Employee',
});

keystone.start();
