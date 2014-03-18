#yapa (yet another parser)

##Install

````bash
npm install git://github.com/elmasse/yapa.git --save
````

##Usage

````js
var Parser = require('yapa'),
    parser, tokens

//tokenize
tokens = parser.tokenize('var _this, _is, _a, _js, _parser;');

console.log(tokens);
````

This will print:

````bash
[ { type: 'KEYWORD', value: 'var' },
  { type: 'IDENTIFIER', value: '_this' },
  { type: 'PUNCTUATOR', value: ',' },
  { type: 'IDENTIFIER', value: '_is' },
  { type: 'PUNCTUATOR', value: ',' },
  { type: 'IDENTIFIER', value: '_a' },
  { type: 'PUNCTUATOR', value: ',' },
  { type: 'IDENTIFIER', value: '_js' },
  { type: 'PUNCTUATOR', value: ',' },
  { type: 'IDENTIFIER', value: '_parser' },
  { type: 'PUNCTUATOR', value: ';' },
  { type: 'EOF', value: 'eof' } ] 

````
