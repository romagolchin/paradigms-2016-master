"use strict";

var unop = function(op) {
	return function(operand) {
		return (function(x, y, z) {return op(operand(x, y, z))});
	}
};

var binop = function(op) {
    return function(l, r) {
	   return (function(x, y, z) {return op(l(x, y, z), r(x, y, z))});
    }
};


var add = binop(function(a, b) {return a + b});
var subtract = binop(function(a, b) {return a - b});
var multiply = binop(function(a, b) {return a * b});
var divide = binop(function(a, b) {return a / b});
var power = binop(function(a, b) {return Math.pow(a, b)});
var mod = binop(function(a, b) {return a % b})

var abs = unop(Math.abs);
var negate = unop(function(a) {return -a});
var log = unop(Math.log);

var cnst = function(value) {
	return (function(x) {return value});
};             


var variable = function(str) {
	return (function() {
	    if (str === 'x')
	        return arguments[0];
	    else if (str === 'y')
	        return arguments[1];
	    else
	        return arguments[2];
	}
	);
};

