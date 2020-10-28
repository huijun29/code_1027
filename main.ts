for (let I = 0; I <= 4; I++) {
    for (let J = 0; J <= I; J++) {
        led.plot(4 - I + J, 4 - J)
    }
    basic.pause(100)
}
for (let I = 0; I <= 4; I++) {
    for (let J = 0; J <= 3 - I; J++) {
        led.plot(J, 3 - I - J)
    }
}
basic.pause(100)
