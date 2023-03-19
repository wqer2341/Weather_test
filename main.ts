input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
loops.everyInterval(500, function () {
	
})
basic.forever(function () {
    if (input.temperature() < 20) {
        basic.showString("Cold")
    } else if (input.temperature() > 35) {
        basic.showString("HOT")
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
loops.everyInterval(5000, function () {
    basic.showNumber(input.temperature())
})
