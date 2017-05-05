/**
 * Working with MongoDB & Mongoose:
 *
 * Mongoose is an ODM layer on top of native MongoDB API. It publishes events based
 * on the status of the connection. Thats the difference between procedural execution
 * based platforms like PHP vs Node. In PHP, you would close the connection at the
 * end of the script. In Node, you would instead listen to those events.
 *
 * Also closing a connection is not straight forward. Because the signals emitted is
 * platform dependent. For example, SIGINT is an operating system-level signal that
 * fires on Unix-based systems like  Linux and Mac OS X. It also fires on Windoes,
 * but if not, there exists a Node package called "readline" that emulates this.
 *
 * Note that if you start Node with nodemon auto-starter, you would have to listen
 * to SIGUSR2. For Heroku platforms, it is SIGTERM.
 */


/**
 * MongoDB Database URI:
 *
 * mongodb://username:password@localhost:27027/database
 *
 * Components:
 * 
 * 1) MongoDB protocol: mongodb
 * 2) Login credentials for database: username:password
 * 3) Server address: localhost
 * 4) Port: 27027
 * 5) Database name: database 
 */

var dbURI = 'mongodb://localhost/loc8r';
var mongoose = require('mongoose');
var gracefulShutdown;

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to: ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through: ' + msg);
        callback();
    });
};

process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');    
    });    
});

process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });    
});