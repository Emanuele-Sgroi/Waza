// Function to make excerpt from description
export function excerpt(content, wordlimit) {
  var filter = content.replace(/\s+/g, ' '); // You can add more filters here
  var wordsarr = filter.split(' ');

  if (wordsarr.length < wordlimit) {
    return content;
  } else {
    var result = '';

    for (var i = 0; i < wordlimit; i++) {
      result = result + ' ' + wordsarr[i] + ' ';
    }

    return result;
  }
}
