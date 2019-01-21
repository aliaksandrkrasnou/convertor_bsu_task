import IConverter from './IConverter';
import {TemperatureTypes} from '../constants/Types';

export default class TemperatureConverter implements IConverter {
    get iConverter(): IConverter {
        return this._iConverter;
    }

    set iConverter(value: IConverter) {
        this._iConverter = value;
    }

    private _iConverter: IConverter;

    Convert(value: string, params: any): any {
        const {from, to} = params;
        switch (from) {
            case TemperatureTypes.Celcius:
            case TemperatureTypes.Kelvin:
            case TemperatureTypes.Fahrenheit: {
                return this.ConvertTemperature(value, params);
            }
            default: {
                return this._iConverter.Convert(value, params);
            }
        }
    }

    private ConvertTemperature(value: string, params: any): number {
        const {from, to} = params;
        switch (from) {
            case TemperatureTypes.Celcius: {
                switch (to) {
                    case TemperatureTypes.Kelvin: {
                        return this.ConvertCelciusKelvin(value, true);
                    }
                    case TemperatureTypes.Celcius: {
                        return parseFloat(value);
                    }
                    case TemperatureTypes.Fahrenheit: {
                        return this.ConvertCelciusFahrenheit(value, true);
                    }
                    default: {
                        throw new class implements Error {
                            message: string = `Cannot convert ${value} from ${from} to ${to}`;
                            name: string = 'Temperature Convert Error';
                        }
                    }
                }
            }
            case TemperatureTypes.Kelvin: {
                switch (to) {
                    case TemperatureTypes.Kelvin: {
                        return parseFloat(value);
                    }
                    case TemperatureTypes.Celcius: {
                        return this.ConvertCelciusKelvin(value, false);
                    }
                    case TemperatureTypes.Fahrenheit: {
                        return this.ConvertKelvinFahrenheit(value, true);
                    }
                    default: {
                        throw new class implements Error {
                            message: string = `Cannot convert ${value} from ${from} to ${to}`;
                            name: string = 'Temperature Convert Error';
                        }
                    }
                }
            }
            case TemperatureTypes.Fahrenheit: {
                switch (to) {
                    case TemperatureTypes.Kelvin: {
                        return this.ConvertKelvinFahrenheit(value, false);
                    }
                    case TemperatureTypes.Celcius: {
                        return this.ConvertCelciusFahrenheit(value, false);
                    }
                    case TemperatureTypes.Fahrenheit: {
                        return parseFloat(value);
                    }
                    default: {
                        throw new class implements Error {
                            message: string = `Cannot convert ${value} from ${from} to ${to}`;
                            name: string = 'Temperature Convert Error';
                        }
                    }
                }
            }
            default: {
                throw new class implements Error {
                    message: string = `Cannot convert ${value} from ${from} to ${to}`;
                    name: string = 'Temperature Convert Error';
                }
            }
        }
    }

    private ConvertCelciusKelvin(value: string, direction: boolean): number {
        /*
        * @params
        * value: string - value to be converted
        * direction: boolean - if true, convert from Celcius to Kelvin
         */
        const celciusInKelvin: number = 273.15;
        const num: number = parseFloat(value);
        return direction ?
            num + celciusInKelvin :
            num - celciusInKelvin;
    }

    private ConvertCelciusFahrenheit(value: string, direction: boolean): number {
        /*
        * @params
        * value: string - value to be converted
        * direction: boolean - if true, convert from Celcius to Fahrenheit
         */
        const num: number = parseFloat(value);
        return direction ?
            (num * 9 / 5) + 32 :
            (num - 32) * 5 / 9;
    }

    private ConvertKelvinFahrenheit(value: string, direction: boolean): number {
        /*
        * @params
        * value: string - value to be converted
        * direction: boolean - if true, convert from Kelvin to Fahrenheit
         */
        const celciusInKelvin: number = 273.15;
        const num: number = parseFloat(value);
        return direction ?
            (num - celciusInKelvin) * 9 / 5 + 32 :
            (num - 32) * 5 / 9 + celciusInKelvin;
    }
};
