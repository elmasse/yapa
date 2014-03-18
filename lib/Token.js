'use strict';

var cocktail = require('cocktail'),
    Configurable = require('cocktail-trait-configurable');

cocktail.mix({
    '@exports': module,
    '@as'     : 'class',

    '@traits' : [Configurable],

    '@static' : {
        TYPE  : {
            EOF        : 'EOF',
            KEYWORD    : 'KEYWORD',
            IDENTIFIER : 'IDENTIFIER',
            PUNCTUATOR : 'PUNCTUATOR',
            NUMBER     : 'NUMBER',
            STRING     : 'STRING',
            NULL       : 'NULL',
            BOOLEAN    : 'BOOLEAN',
            REGEX      : 'REGEX',
            COMMENT    : 'COMMENT'
        },

        _AS_TYPE: function (type, value) {
            var Token = this;
            
            return new Token({
                type: type,
                value: value
            });
        },

        KEYWORD: function (value) {
            return this._AS_TYPE(this.TYPE.KEYWORD, value);
        },

        IDENTIFIER: function (value) {
            return this._AS_TYPE(this.TYPE.IDENTIFIER, value);
        },

        PUNCTUATOR: function (value) {
            return this._AS_TYPE(this.TYPE.PUNCTUATOR, value);
        },

        NUMBER: function (value) {
            return this._AS_TYPE(this.TYPE.NUMBER, value);
        },

        STRING: function (value) {
            return this._AS_TYPE(this.TYPE.STRING, value);
        },

        BOOLEAN: function (value) {
            return this._AS_TYPE(this.TYPE.BOOLEAN, value);
        },

        NULL: function (value) {
            return this._AS_TYPE(this.TYPE.NULL, value);
        },

        REGEX: function(value) {
            return this._AS_TYPE(this.TYPE.REGEX, value);
        },

        COMMENT: function(value) {
            return this._AS_TYPE(this.TYPE.COMMENT, value);
        },

        EOF: function () {
            return this._AS_TYPE(this.TYPE.EOF, 'eof');
        }
    },

    '@properties': {
        type  : null,
        value : null
    },

    constructor: function (options) {
        this.configure(options);
    },

    is: function(type) {
        return this.type === type;
    }
});
