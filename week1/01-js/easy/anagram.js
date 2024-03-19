/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length !== str2.length) return false;

  const str1Map = {};
  const str2Map = {};

  for(let i = 0; i < str1.length ; i ++){
    str1Map[str1[i]] = (str1Map[str1[i]] || 0) + 1;
    str2Map[str2[i]] = (str2Map[str2[i]] || 0) + 1;
  }
  //if(Object.keys(str1Map).length !== Object.keys(str2Map).length) return false;
  for(let key in str1Map){
    if(str1Map[key] !== str2Map[key]) return false;
  }
  return true;


}

module.exports = isAnagram;
