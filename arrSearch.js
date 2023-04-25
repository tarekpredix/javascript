

var arr = [1, 2, 3, 4, 5, 6, 7]

var find = 4
var isFound = false
for (var i=0; i<arr.length; i++) {
    if (arr[i] === find) {
        console.log('Data found at Index ' + i)
        isFound = true
        break;
    } 
}

if (!isFound) {
    console.log('Data Not Found')
}