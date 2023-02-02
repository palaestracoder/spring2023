// 'var' keyword required here
var colors = ["brown", "yellow", "pink"]
for (var item in colors)
    console.log(item)

for (var color in colors) {   // curly braces encouraged
    console.log(color)
}

