/**
 * Custom blocks for MySensor
 */
//% color=#008080 icon="\uf2c9"
namespace mySensor {

    //% block="read temperature (°C)"
    export function readTemperature(): number {
        const address = 0x48  // replace with your sensor's I2C address
        pins.i2cWriteNumber(address, 0x00, NumberFormat.UInt8BE)  // command to read
        const value = pins.i2cReadNumber(address, NumberFormat.UInt8BE)
        return value
    }
}
