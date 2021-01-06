// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  // if 's' does not have a value or is empty, return 0
  if (!s || !s.length) return 0;
  // if we only have one character, return 1
  if (s.length === 1) return 1;
  // create a "lookup" map that keeps track of our characters
  const lookup = new Map();
  // create a counter variable that increments for each
  // unique letter, this is what we return at the end
  let numberOfUniqueCharacters = 0;
  // create current variable to keep track of index we are at in 's' array
  let current = 0;
  // loop through 's'
  for (let i = 0; i < s.length; i++) {
    // check if lookup already has the value
    if (lookup.has(s[i])) {
      // if lookup already has this letter
      // we want to "move" current to the next index position
      // using Math.max prevents 'current' from going backwards
      // it can only move forward
      current = Math.max(lookup.get(s[i]) + 1, current);
    }
    // insert the current letter into lookup map with the index as the value
    lookup.set(s[i], i);
    // find and assign current max value between
    // the current substring and the max substring
    numberOfUniqueCharacters = Math.max(
      i - current + 1,
      numberOfUniqueCharacters
    );
  }
  // after we are done looping, return the value of numberOfUniqueCharacters
  return numberOfUniqueCharacters;
};
