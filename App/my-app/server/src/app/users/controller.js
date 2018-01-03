
export const getList = (request, reply) => {
//	const
	const fs = require('fs');
	const userlist = fs.readFileSync('/root/App/my-app/server/src/app/users/userslist.json');
	console.log(userlist)
	return reply({message: userlist.toString()});
};
