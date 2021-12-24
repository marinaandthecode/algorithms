function findLongestWordLength(str) {
  let arrOfLengths = str.split(" ").map(word => word.length); 
  let sortedArrOfLengths = arrOfLengths.sort(function(a, b){return b - a});
  return sortedArrOfLengths[0];
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");