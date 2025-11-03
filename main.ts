/**
 * Makcode Extension for micro:bit
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

    export enum LineSensorPin {
        //% block="C"
        C = DigitalPin.P2,
        //% block="D"
        D = DigitalPin.P8,
        //% block="G"
        G = DigitalPin.P12,
        //% block="H"
        H = DigitalPin.P1
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

    /**
     * Line Sensor
     * @param pin the pin where sensor is connected
     */
    //% block="Αισθητήρας γραμμής στη θύρα %pin , πατάει μαύρη γραμμή;"
    //% group="GIGO"
    //% weight=90
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    export function lineSensor(pin: LineSensorPin): boolean {
        /*
            A typical line-following sensor outputs:
                0 (LOW) when it detects black (no reflection),
                1 (HIGH) when it detects white (reflection).
                It’s just a digital signal — so you can read it using pins.digitalReadPin().
        */
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == 0
    }

    /**
     * Two digit integer
     * @param num the number to be displayed
     */
    //% block="Εμφάνισε διψήφιο ακέραιο %number"
    //% group="GIGO"
    //% weight=90
    //% num.min=10 num.max=99 num.defl=50
    export function showTwoDigitInteger(num: number): void {
        if (num>99 || num<10)
            return;
        let digits: number[][][] = [];
        digits.push([ [9,9], [9,9], [9,9], [9,9], [9,9] ]); //number 0
        digits.push([ [0,9], [0,9], [0,9], [0,9], [0,9] ]); //number 1
        digits.push([ [9,9], [0,9], [9,9], [9,0], [9,9] ]); //number 2
        digits.push([ [9,9], [0,9], [9,9], [0,9], [9,9] ]); //number 3
        digits.push([ [9,0], [9,0], [9,9], [0,9], [0,9] ]); //number 4
        digits.push([ [9,9], [9,0], [9,9], [0,9], [9,9] ]); //number 5
        digits.push([ [9,9], [9,0], [9,9], [9,9], [9,9] ]); //number 6
        digits.push([ [9,9], [0,9], [0,9], [0,9], [0,9] ]); //number 7
        digits.push([ [9,9], [9,9], [0,0], [9,9], [9,9] ]); //number 8
        digits.push([ [9,9], [9,9], [0,9], [0,9], [0,9] ]); //number 9

        let digit0 = Math.trunc(num / 10);
        let digit1 = num % 10;
        basic.clearScreen() 
        let x=0, y=0, i=0;
        
        for (y=0; y<5; y++) {
            // Plot digit0
            for (i=0; i<2; i++) {
                if (digits[digit0][y][i] == 9)
                    led.plot(i, y);
            }
            // Plot digit1
            for (i=3; i<5; i++) {
                if (digits[digit1][y][i-3] == 9)
                    led.plot(i, y);
            }
        }
    }
}

//% color=#FF6600 icon="\uf085" block="Gigo Sensors"
namespace alxSensors {

    export enum tempHumPin {
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
    

    /**
     * Read temperature from a DHT11 Sensor
     * @param pin the pin where DHT11 sensor is connected
     */
    //% block="διάβασε θερμοκρασία (DHT11) από τη θύρα %pin"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    export function readDHT11Temperature(pin: tempHumPin): number {
        dht11_dht22.queryData(
            DHTtype.DHT11,
            <DigitalPin><number>pin,
            true,
            false,
            true
        )
        return dht11_dht22.readData(dataType.temperature);
    }

    /**
     * Read humidity from a DHT11 Sensor
     * @param pin the pin where DHT11 sensor is connected
     */
    //% block="διάβασε υγρασία (DHT11) από τη θύρα %pin"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    export function readDHT11Humidity(pin: tempHumPin): number {
        dht11_dht22.queryData(
            DHTtype.DHT11,
            <DigitalPin><number>pin,
            true,
            false,
            true
        )
        return dht11_dht22.readData(dataType.humidity);
    }
}