//Adding a userif (! directory.group('user'))	directory.addGroup('user');ds.User.remove();ds.Avatar.remove();var backendLocation = getFolder().path;var ricardo = new ds.User({	email: "demo@wakanda.io", 	password: "123", 	fullName: "Demo",	role: "user"});ricardo.save();ricardo.photo=File(backendLocation + 'Workers/profile.jpg');ricardo.save();var userID = ds.User.query("email = :1", "demo@wakanda.io").ID[0]var avatar = new ds.Avatar({	name: "Robocop", 	user: userID});avatar.save();avatar.photo=File(backendLocation + 'Workers/avatar1.jpeg');avatar.save();avatar = new ds.Avatar({	name: "GuitarMan", 	user: userID});avatar.save();avatar.photo=File(backendLocation + 'Workers/avatar2.jpeg');avatar.save();