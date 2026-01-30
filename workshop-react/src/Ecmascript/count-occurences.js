const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

const countOccurences = (arr) => {
  return arr.flat().reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
};

console.log(countOccurences(input));
