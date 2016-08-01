(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(mainTextInput) {
  this.mainText = mainTextInput;
}

Entry.prototype.wordCount = function() {
  var words = this.mainText.split(' ');
  return words.length;
};

Entry.prototype.vowelCount = function() {
  var entry = this.mainText.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for(i=0; i < entry.length; i++) {
    if(vowels.includes(entry[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};

Entry.prototype.consonantCount = function() {
  var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  var entry = this.mainText.split('');

  var count = 0;
  for(i=0; i < entry.length; i++) {
    if(consonants.includes(entry[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/Entry.js').entryModule;

$(document).ready(function(){
  //Make new entry object
  $("#new-entry").submit(function(event){
    event.preventDefault();
    var textInput = $("#main-text").val();
    var newEntry = new Entry(textInput);
    $("#journal").append("<p>"+newEntry.mainText+"</p>");
    $("#word-count").text(newEntry.wordCount());
    $("#vowel-count").text(newEntry.vowelCount());
    $("#consonant-count").text(newEntry.consonantCount());
  });


});

},{"./../js/Entry.js":1}]},{},[2]);
