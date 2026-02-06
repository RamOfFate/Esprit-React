const names = ["Tarek", "Slim", "Amine", "mr.HECHMI"];

const findLongestword = (arr) => {
  let [...words] = arr;

  let wordObj = words.map((mot) => ({
    mot,
    longeur: mot.length,
  }));

  return wordObj.reduce((max, current) =>
    current.longeur > max.longeur ? current : max, 
  );
};

console.log(findLongestword(names));