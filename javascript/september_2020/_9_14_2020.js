/*4.

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]

example:
longestRepetition("")//["",0]
longestRepetition("abcdefg")//[a,1]
longestRepetition("aabbbaaaabbbbb")//['b', 5]
longestRepetition("aabb")//['a', 2]

*/ 

function longestRepetition(s) {

  if (!s) return ["", 0];
  var arr = s.split('');
  var letter = arr[0];
  var count = 0, preCount = 0;
  var preLetter = '';
  for (i = 0; i < arr.length; i++) {
    if (letter === arr[i]) 
      count = count + 1
    else {
      if (preCount >= count) {
        letter = arr[i];
        count = 1;
        continue;
      }
      preCount = count;
      preLetter = arr[i - 1]
      count = 1;
      letter = arr[i];

    }
  }
  if (preCount >= count) return [preLetter, preCount];

  else {
    return [letter, count]
  }
}



console.log(longestRepetition("aabbbaaaabbbbb")); 