// Use getters y setters para controlar el acceso a un objeto
// celsius = 5/9 * (farenheit - 32) y farenheit = celsius * 9.0 / 5 + 32

class Thermostat {
    constructor(farenheit) {
        this.farenheit = farenheit;
    }
    get temperature() {
        return (5 / 9) * (this.farenheit - 32);
    }
    set temperature(celsius) {
        this.farenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius