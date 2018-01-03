import * as controller from './controller';
//	import * as validator from './schema';

exports.register = (server, options, next) => {
	
	server.route([
		{
			method: 'GET',
			path:	'/list',
			config: {
				tags:['api'],
				description: '返回userlist',
//				notes: 'aa',
				handler: controller.getList,
//				validate: validator.input,
			},
		},
	
	]);

	next();

};


exports.register.attributes = {
	name: 'list-route',
};
