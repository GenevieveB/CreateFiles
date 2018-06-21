var fs = require('fs')
var fileContents = fs.readFileSync('names.txt', 'utf-8')
var myList = fileContents.split('\n')//.reverse().join('\n')

fs.writeFileSync('namesReversed.txt', myList,'utf-8')

function reverseString (str){
 return str.split('').reverse().join('').split(' ').reverse().join(' ')
}


for (var name of myList){
  var eman = reverseString(name)
  fs.writeFileSync(name+'.txt', eman,'utf-8')
}

console.log(myList)
