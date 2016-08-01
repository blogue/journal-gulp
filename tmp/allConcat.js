var Entry = require('./../js/Entry.js').entryModule;

$(document).ready(function(){
  //Make new entry object
  $("#new-entry").submit(function(event){
    event.preventDefault();
    var textInput = $("#main-text").val();
    var newEntry = new Entry(textInput);
    $("#journal").append("<p>"+newEntry.mainText+"</p>");
    console.log("hey");
  });


});
