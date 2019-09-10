var fs = require("fs");
fs.readFile("./lyrics/Worte.pdf", (err, pdfBuffer) => {
  // pdfBuffer contains the file content
  reader = new PdfReader();
  reader.parseBuffer(pdfBuffer, function (err, item) {
    if (err) callback(err);
    else if (!item) callback();
    else if (item.text) console.log(item.text);
  });
});