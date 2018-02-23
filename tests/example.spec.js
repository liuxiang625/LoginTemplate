// Wakanda uses mocha/chai modules to run backend tests inside a NodeWorker

// https://mochajs.org/
// Mocha is a feature-rich JavaScript test framework running on Node.js
// and in the browser, making asynchronous testing simple and fun. Mocha
// tests run serially, allowing for flexible and accurate reporting, while
// mapping uncaught exceptions to the correct test cases. 

// http://chaijs.com/
// Chai is a BDD / TDD assertion library for node and the browser
// that can be delightfully paired with any javascript testing framework.

var chai = requireNode('chai');
var expect = chai.expect;

describe('DataStore tests', function () {
	describe('User DataClass', function () {
	    it('Should be defined', function () {
	        expect(ds.User).to.be.a("function");
	    });	
	});
	describe('Avatar DataClass', function () {
	    it('Should be defined', function () {
	        expect(ds.Avatar).to.be.a("function");
	    });	
	});
});