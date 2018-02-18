var fs = require('fs');
var colors = require('colors');
var sha512 = require('js-sha512').sha512;
var sha384 = require('js-sha512').sha384;
var htmlEncode = require('js-htmlencode').htmlEncode;
var htmlDecode = require('js-htmlencode').htmlDecode;
var sha512_256 = require('js-sha512').sha512_256;
var sha512_224 = require('js-sha512').sha512_224;
var md5 = require('js-md5');

//encode/decode functions
module.exports = {
    base64_encode: function (data) {
        var encode = new Buffer(data).toString('base64');
        return encode;
    },
    base64_decode: function (data) {
        var decode = new Buffer(data, 'base64').toString('utf8');
        return decode;
    },
    hex_encode: function (data) {
        var encode = new Buffer(data).toString('hex');
        return encode;
    },
    hex_decode: function (data) {
        var decode = new Buffer(data, 'hex').toString('utf8');
        return decode;
    },
    sha512: function (data) {
        var hash = sha512(data);
        return hash;
    },

    sha384: function (data) {
        var hash = sha384(data);
        return hash;
    },
    sha512_224: function (data) {
        var hash = sha512_224(data);
        return hash;
    },
    sha512_256: function(data) {
        var hash = sha512_256(data);
        return hash;
    },
    md5: function(data) {
        var hash = md5(data);
        return hash;
    },
    htmlEncode: function(data) {
        var encode = htmlEncode(data);
        return encode;
    },
    htmlDecode: function(data) {
        var decode = htmlDecode(data);
        return decode;
    },

};