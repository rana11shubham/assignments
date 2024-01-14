/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let len1=str1.length;
  let len2=str2.length;
  if(len1!=len2)
    return false;
  let arr1=[];
  let arr2=[];
  for(let i=0;i<len1;i++){
      arr1[i]=str1[i].toLowerCase();
      arr2[i]=str2[i].toLowerCase();
  }
  arr1.sort();
  arr2.sort();
  for(let i=0;i<len1;i++){
    if(arr1[i]!=arr2[i])
      return false;
  }
  return true;
}

module.exports = isAnagram;
