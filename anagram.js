// Create a function that figures out if two words are an anagram
// An anagram is a type of word play, the result of rearranging the letters
// using all the original letters eactly once

// for example beat, beta is an anagram
// tuba, tabu is an anagram


function isAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;
  
  var stuff1 = word1.toLowerCase().split('').sort();
  var stuff2 = word2.toLowerCase().split('').sort();

  for (var i = 0; i < stuff1.length; i++) {
    if (stuff1[i] !== stuff2[i]) {
      console.log("nope");
      return false;
    }
  }
  return true;
}

