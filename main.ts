input.onButtonPressed(Button.A, function () {
    a = 0
    for (let index = 0; index < 25; index++) {
        a += 1
        燈號(a)
        led.plot(x, y)
        basic.pause(100)
    }
    for (let index = 0; index < 25; index++) {
        燈號(a)
        a += -1
        led.unplot(x, y)
        basic.pause(100)
    }
})
function 燈號 (num: number) {
    x = 0
    y = 0
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num < 17) {
        x = 0
        y = 17 - num
    } else if (num >= 17 && num < 20) {
        x = num - 16
        y = 1
    } else if (num >= 20 && num < 22) {
        x = 3
        y = num - 18
    } else if (num >= 22 && num < 24) {
        x = 24 - num
        y = 3
    } else if (num >= 24 && num < 25) {
        x = 1
        y = num - 22
    } else if (num == 25) {
        x = 2
        y = 2
    }
}
input.onButtonPressed(Button.B, function () {
    a = 25
    for (let index = 0; index < 25; index++) {
        燈號(a)
        a += -1
        led.plot(x, y)
        basic.pause(100)
    }
    for (let index = 0; index < 25; index++) {
        a += 1
        燈號(a)
        led.unplot(x, y)
        basic.pause(100)
    }
})
let y = 0
let x = 0
let a = 0
a = 0
basic.forever(function () {
	
})
