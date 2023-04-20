
/* var i = 0
while (i < 10) {
    console.log('Tarek Aziz')
    i++
} */

var isRunning = true

while(isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('Got it')
        isRunning = false
    }
    else {
        console.log('Got rand number ' + rand)
    }
}