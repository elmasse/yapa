'use strict';

var cocktail = require('cocktail'),
    Lexer    = require('yalex'),
    ES5      = require('./ES5');

cocktail.mix({
    '@exports' : module,
    '@as'      : 'class',

    '@traits'  : [ES5],

    '@static' : {
        /**
         * @static
         * @method create
         * Convinient factory to avoid using new on modules
         */
        create: function () {
            var Parser = this;
            return new Parser();
        }
    },

    /**
     * @private {Array}
     */
    _tokens: null,

    /**
     * @private {Lexer}
     */
    _lexer: null,

    constructor: function () {
        this._lexer = new Lexer();
        this.initLexer();
    },

    getLexer: function () {
        return this._lexer;
    },

    tokenize: function (source) {
        var me      = this,
            lexer   = me._lexer,
            tokens  = me._tokens = [];
        
        lexer.lex(source);
        
        return tokens;
    },

    addToken: function (token) {
        this._tokens.push(token);
    }

});
