var fs = require('fs');
var rs = fs.createReadStream(__dirname + '\\file.txt');

//rs.on(eventName, callback)
rs.on('open', () => console.log('The file is open'))
