function Entry(mainTextInput) {
  this.mainText = mainTextInput;
}

Entry.prototype.numberOfWords = function() {
  var words = this.mainText.split(' ');
  return words.length;
};

exports.entryModule = Entry;
