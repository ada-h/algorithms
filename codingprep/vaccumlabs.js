const fs = require("fs");

function parseFile(fileName) {
  const dic = fs.readFileSync(fileName, "utf8");
  let lines = dic.split(`\n`);
  let totalSets = lines.shift();
  let testCases = {};
  for (let i = 0; i < totalSets; i++) {
    let dictSize = lines.shift();
    let dict = lines.splice(0, dictSize);
    let querySize = lines.shift();
    let queries = lines.splice(0, querySize);
    testCases[dict] = queries;
  }
  return testCases;
}
function expandedDict(dictArray) {
  dictArray = dictArray.split(",");

  let dict = {};
  let wordAssociation = [];
  dictArray.forEach(item => {
    dict[item.split(" ")[0]] = item.split(" ")[1];
  });
  console.log(dictArray, "i am dict");

  Object.keys(dict).forEach(key => {
    dict[dict[key]] = key;
  });

  //to do: handle association

  return dict;
}

function synonym() {
  let map = parseFile("example.in");
  let output = [];
  Object.keys(map).forEach(dict => {
    let queries = map[dict];
    let expandedictionary = expandedDict(dict);
    queries.forEach(query => {
      let firstQuery = query.split(" ")[0];
      let secondQuery = query.split(" ")[1];
      if (firstQuery.toLowerCase() === secondQuery.toLowerCase()) {
        output.push("synonym");
      } else if (
        expandedictionary[firstQuery] &&
        expandedictionary[firstQuery].toLowerCase() ===
          secondQuery.toLowerCase()
      ) {
        output.push("synonym");
      } else {
        output.push("different");
      }
    });
  });
  fs.writeFileSync("test.txt", output.toString());
}

synonym();
