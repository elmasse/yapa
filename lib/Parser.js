'use strict';

var cocktail     = require('cocktail'),
    Lexer        = require('yalex'),
    ES5Grammar   = require('./grammar/ES5');

cocktail.mix({
    '@exports' : module,
    '@as'      : 'class',

    '@traits'  : [ES5Grammar],

    '@static' : {
        /**
         * @static
         * @method create
         * Convinient factory to avoid using new on modules
         */
        create: function () {
            var Parser = this,
                parser = new Parser();

            return parser;
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
        var me = this;
        me._lexer = Lexer.create(me.getLexerConfig());
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
