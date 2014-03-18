'use strict';

var cocktail = require('cocktail'),
    Lexer    = require('yalex'),
    ES5      = require('./ES5');

cocktail.mix({
    '@exports' : module,
    '@as'      : 'class',

    '@traits'  : [ES5],

    '@properties' : {
        tokens : null
    },

    lexer: null,

    constructor: function () {
        this.lexer = new Lexer();
        this.initLexer(this.lexer);
    },

    tokenize: function (source) {
        this.tokens = [];
        this.lexer.lex(source);
        return this.tokens;
    },

    addToken: function (token) {
        this.tokens.push(token);
    }

});
