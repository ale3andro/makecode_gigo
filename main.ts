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

    export enum MotorPin {
        //% block="E"
        E = DigitalPin.P15,
        //% block="F"
        F = DigitalPin.P13,
        //% block="G"
        G = DigitalPin.P12,
        //% block="H"
        H = DigitalPin.P1
    }

    export enum TouchButtonPin {
        //% block="A"
        A = DigitalPin.P20,
        //% block="E"
        E = DigitalPin.P16,
        //% block="F"
        F = DigitalPin.P14,
        //% block="G"
        G = DigitalPin.P2,
        //% block="H"
        H = DigitalPin.P8
    }

    export enum ServoPin {
        //% block="B"
        B = AnalogPin.P14,
        //% block="C"
        C = AnalogPin.P2,
        //% block="D"
        D = AnalogPin.P8,
        //% block="E"
        E = AnalogPin.P15,
        //% block="F"
        F = AnalogPin.P13,
        //% block="G"
        G = AnalogPin.P12,
        //% block="H"
        H = AnalogPin.P1
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
    //% group="GIGO"
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
    //% group="GIGO"
    //% weight=90
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    //% speed.min=0 speed.max=1023 value.defl=512
    export function funcMotor(pin: MotorPin, direction: MotorDirection, speed: number): void {
        if (pin == MotorPin.E) {
            pins.analogWritePin(AnalogPin.P15, direction)
            pins.analogWritePin(AnalogPin.P16, speed)
        }
        if (pin == MotorPin.F) {
            pins.analogWritePin(AnalogPin.P13, direction)
            pins.analogWritePin(AnalogPin.P14, speed)
        }
        if (pin == MotorPin.G) {
            pins.analogWritePin(AnalogPin.P12, direction)
            pins.analogWritePin(AnalogPin.P2, speed)
        }
        if (pin == MotorPin.H) {
            pins.analogWritePin(AnalogPin.P1, direction)
            pins.analogWritePin(AnalogPin.P8, speed)
        }
    }

    /**
     * Touch pin
     * @param pin the pin where button is connected
     */
    //% block="Κουμπί πίεσης στη θύρα %pin , είναι πατημένο"
    //% group="GIGO"
    //% weight=90
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    export function touchPressed(pin: TouchButtonPin): boolean {
        pins.setPull(pin, PinPullMode.PullUp)
        return !pins.digitalReadPin(pin)
    }

    /**
     * Servo
     * @param pin the pin where servo is connected
     * @param angle the desired angle of the servo
     */
    //% block="Σέρβο στη θύρα %pin , όρισε γωνία %angle"
    //% group="GIGO"
    //% weight=90
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    //% angle.min=0 angle.max=180 angle.defl=90
    export function setServo(pin: ServoPin, angle: number): void {
        // Convert angle (0–180) to pulse width (500–2500 µs)
        let pulse = (angle * 2000 / 180) + 500;
        pins.servoSetPulse(pin, pulse);
    }


}
