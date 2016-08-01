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
