/*jslint browser:true, node:true*/
/*global console*/
var fs = require('fs'), path = require('path');
var wordz = {c:[], d:[], r:[], o:[]};
fs.readFile(path.resolve(__dirname, 'wordsEn.txt'), function(err, result) {
    'use strict';
    var words;
    if (!err && result) {
        words = result.toString().split('\n');
        wordz.c = words.filter(function(item){return item[0] === 'c'});
        wordz.d = words.filter(function(item){return item[0] === 'd'});
        wordz.r = words.filter(function(item){return item[0] === 'r'});
        wordz.o = words.filter(function(item){return item[0] === 'o'});
    }
});



/**
 * cdro generator.
 * @returns {CDROGenerator}
 * @constructor
 */
function CDROGenerator() {
    'use strict';
    function getRandomElementFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    function getGeneratedCdro() {
        var cdro = [
            getRandomElementFromArray(wordz.c),
            getRandomElementFromArray(wordz.d),
            getRandomElementFromArray(wordz.r),
            getRandomElementFromArray(wordz.o)
        ];
        return cdro.join(' ').trim();
    }
    this.getGeneratedCdro = getGeneratedCdro;
    return this;
}
module.exports = new CDROGenerator();
