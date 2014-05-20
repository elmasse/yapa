'use strict';

var chai   = require('chai'),
    expect = chai.expect,
    fs = require('fs'),
    path = require('path'),
    Parser  = require('../../lib/Parser');

describe('Parser integration tests', function(){
    var sut,
        source, ret, start, diff, check, expected;

    describe('tokenizing ES5', function(){
        sut = Parser.create();

        it('should tokenize jQuery source', function(){

            source = fs.readFileSync(path.resolve(__dirname, '../files/large.js'), 'utf8');

            start = (new Date()).getTime();
            ret = sut.tokenize(source);
            diff = (new Date()).getTime() - start;

            console.log('total: ' + diff + 'ms. tokens: ' + ret.length + ' rate: ' + (ret.length/diff) + '/ms');

            check = require('../files/large.tokens.json');


            ret.forEach(function(token, i){
                expected = check[i];
                // if(expected  && expected.type.toUpperCase() !== token.type) {
                //     console.log('At ' + i + '\n');
                //     console.log('expected:' + expected.type +  '  got:' + token.type);
                //     console.log('expected:' + expected.value +  '  got:' + token.value);
                //     throw new Error();
                // }
                if(expected){
                    expect(token.type).to.be.eql(expected.type);
                }

            });

        });

        it('should tokenize jQuery.min source', function(){

            source = fs.readFileSync(path.resolve(__dirname, '../files/large.min.js'), 'utf8');
            start = (new Date()).getTime();
            ret = sut.tokenize(source);
            diff = (new Date()).getTime() - start;

            console.log('total: ' + diff + 'ms. tokens: ' + ret.length + ' rate: ' + (ret.length/diff) + '/ms');

            check = require('../files/large.min.tokens.json');

            ret.forEach(function(token, i){
                expected = check[i];
                // if(expected  && expected.type.toUpperCase() !== token.type) {
                //     console.log('At ' + i + '\n');
                //     console.log('expected:' + expected.type +  '  got:' + token.type);
                //     console.log('expected:' + expected.value +  '  got:' + token.value);
                //     throw new Error();
                // }
                if(expected){
                    expect(token.type).to.be.eql(expected.type);
                }
            });
        });
    });

});
