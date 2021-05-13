input.onPinPressed(TouchPin.P0, function () {
    basic.showString("A")
    basic.showNumber(Awin)
    basic.showString("B")
    basic.showNumber(Bwin)
    basic.showString("T")
    basic.showNumber(Tie)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.showIcon(IconNames.Happy)
    Awin += 1
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(0, 10)
    if (Hand == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . # #
            # # # # #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
    } else if (Hand == 1) {
        basic.showLeds(`
            . . # . #
            . . # . #
            . # # # #
            . # # # #
            . # # # #
            `)
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    basic.showIcon(IconNames.Happy)
    Tie += 1
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.showIcon(IconNames.Happy)
    Bwin += 1
    basic.clearScreen()
})
let Hand = 0
let Tie = 0
let Bwin = 0
let Awin = 0
Awin = 0
Bwin = 0
Tie = 0
basic.forever(function () {
	
})
