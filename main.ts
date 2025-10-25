/**
 * DHT11 sensor extension for micro:bit
 * by ChatGPT example
 */

//% color=#00A6F0 icon="\uf2c9" block="DHT11 Sensor"
namespace DHT11 {

    // Store last read values
    let lastTemp = 0
    let lastHumi = 0

    //% blockHidden=true
    function readData(pin: DigitalPin): void {
        let buffer: number[] = []
        let checksum = 0

        pins.digitalWritePin(pin, 0)
        basic.pause(18)
        pins.setPull(pin, PinPullMode.PullUp)
        pins.digitalReadPin(pin)

        while (pins.digitalReadPin(pin) == 1);
        while (pins.digitalReadPin(pin) == 0);
        while (pins.digitalReadPin(pin) == 1);

        for (let i = 0; i < 40; i++) {
            while (pins.digitalReadPin(pin) == 0);
            let t = control.micros()
            while (pins.digitalReadPin(pin) == 1);
            let duration = control.micros() - t
            buffer.push(duration > 50 ? 1 : 0)
        }

        let bytes: number[] = [0, 0, 0, 0, 0]
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                bytes[i] = (bytes[i] << 1) + buffer[i * 8 + j]
            }
        }

        checksum = (bytes[0] + bytes[1] + bytes[2] + bytes[3]) & 0xFF
        if (checksum == bytes[4]) {
            lastHumi = bytes[0]
            lastTemp = bytes[2]
        }
    }

    /**
     * Available pins for the DHT11 sensor
     */
    export enum DHT11Pin {
        //% block="P0"
        P0 = DigitalPin.P0,
        //% block="P1"
        P1 = DigitalPin.P1,
        //% block="P2"
        P2 = DigitalPin.P2,
        //% block="P8"
        P8 = DigitalPin.P8,
        //% block="P12"
        P12 = DigitalPin.P12
    }

    /**
     * Get temperature in °C
     * @param pin the pin where the DHT11 is connected
     */
    //% block="temperature (°C) from DHT11 at pin %pin"
    //% group="Read values"
    //% weight=100
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    export function temperature(pin: DHT11Pin): number {
        readData(pin)
        basic.pause(100)
        return lastTemp
    }

    /**
     * Get humidity in %
     * @param pin the pin where the DHT11 is connected
     */
    //% block="humidity (%%) from DHT11 at pin %pin"
    //% group="Read values"
    //% weight=90
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=3
    //% pin.fieldOptions.width=220
    export function humidity(pin: DHT11Pin): number {
        readData(pin)
        basic.pause(100)
        return lastHumi
    }
}
