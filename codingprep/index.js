var fs = require("fs");

fs.writeFile("input.txt", "Simple and Easy!", function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("Data Written Successfully");
  console.log("Let's read new data");
  fs.readFile("input.txt", function(err, data) {
    if (err) {
      return err;
    }
    console.log(data.toString());
  });
});
