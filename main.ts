/**
 * LED Control Extension for micro:bit
 * by ChatGPT example
 */

//% color=#2e752e icon="\uf0eb" block="Gigo Robot"
namespace alxGigo {

    /**
     * Available pins for the LED
     */
    export enum LedPin {
        //% block="B"
        B = DigitalPin.P14,
        //% block="P1"
        P1 = DigitalPin.P1,
        //% block="P2"
        P2 = DigitalPin.P2,
        //% block="P8"
        P8 = DigitalPin.P8,
        //% block="P12"
        P12 = DigitalPin.P12
    }

    export enum LedState {
        //% block="άναψε"
        άναψε = 1,
        //% block="σβήσε"
        σβήσε = 0
    }

    /**
     * Turn LED ON
     * @param pin the pin where LED is connected
     */
    //% block="LED στη θύρα %pin %led_state"
    //% group="LED"
    //% weight=100
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    export function turnOn(pin: LedPin, led_state: LedState): void {
        pins.digitalWritePin(pin, led_state)
    }

    /**
     * Turn LED OFF
     * @param pin the pin where LED is connected
     */
    //% block="turn OFF LED at pin %pin"
    //% group="LED"
    //% weight=90
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    export function turnOff(pin: LedPin): void {
        pins.digitalWritePin(pin, 0)
    }
}
