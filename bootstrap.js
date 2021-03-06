/*
 * A BootStrap is a JavaScript file that is run when your project is loaded on the server.
 * You can use it  to initialize your application, define HTTP pattern handlers etc..
 */
 
 //The customLogin() function will now authenticate all users.
// We want the listener to be run with the Admin group's privileges.
directory.setLoginManager( "login/login", "Admin" );

//Initialize our Model with some data.
new SharedWorker("Workers/initData.js", "InitData"); 
