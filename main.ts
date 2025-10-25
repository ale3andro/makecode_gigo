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
        //% block="C"
        C = DigitalPin.P2,
        //% block="D"
        D = DigitalPin.P8,
        //% block="E"
        E = DigitalPin.P15,
        //% block="F"
        F = DigitalPin.P13,
        //% block="G"
        G = DigitalPin.P12,
        //% block="H"
        H = DigitalPin.P1
    }

    export enum motorPin {
        //% block="E"
        E = DigitalPin.P15,
        //% block="F"
        F = DigitalPin.P13,
        //% block="G"
        G = DigitalPin.P12,
        //% block="H"
        H = DigitalPin.P1
    }

    export enum buttonPin {
        //% block="A"
        A = DigitalPin.P19,
        //% block="E"
        E = DigitalPin.P15,
        //% block="F"
        F = DigitalPin.P13,
        //% block="G"
        G = DigitalPin.P12,
        //% block="H"
        H = DigitalPin.P1
    }

    export enum LedState {
        //% block="άναψε"
        άναψε = 1,
        //% block="σβήσε"
        σβήσε = 0
    }

    export enum MotorDirection {
        //% block="ρολογιού"
        ρολογιού = 1023,
        //% block="αντίστροφη_ρολογιού"
        αντίστροφη_ρολογιού = 0
    }

    /**
     * Turn LED ON
     * @param pin the pin where LED is connected
     * @param led_state the state of the LED 
     */
    //% block="LED στη θύρα %pin %led_state"
    //% group="LED"
    //% weight=100
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    export function funcLed(pin: LedPin, led_state: LedState): void {
        pins.digitalWritePin(pin, led_state)
    }

    /**
     * Motor
     * @param pin the pin where motor is connected
     * @param direction the direction of the motor movement
     * @param speed the speed of the motor
     */
    //% block="Κινητήρας στη θύρα %pin : κατεύθυνση %direction και ταχύτητα %speed"
    //% group="MOTOR"
    //% weight=90
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    export function funcMotor(pin: MotorPin, direction: MotorDirection, speed: MotorSpeed): void {
        pins.analogWritePin(pin, direction, 700)
    }
}
