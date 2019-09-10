const fs = require('fs')
let currentType = ''

fs.readFile('./lyrics/example.txt', 'utf8', function (err, data) {
  if (err) throw err;
  const arrayOfContent = data.split("\n").map(ele => {
    if (ele.includes('Refrain')) currentType = 'Refrain'
    if (ele.includes('Bridge')) currentType = 'Bridge'
    if (ele === '') currentType = ''
    return { text: ele, length: ele.length, type: currentType }
  }).filter(line => line.text.length > 0).filter(line => line.text === 'Bridge:' || line.text === 'Refrain:' ? false : true)
  console.log(arrayOfContent)
});