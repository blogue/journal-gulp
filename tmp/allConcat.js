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
