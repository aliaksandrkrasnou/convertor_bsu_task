import {DistanceTypes, TemperatureTypes, WeightTypes} from '../constants/Types';
import IConverter from '../converter/IConverter';
import DistanceConverter from '../converter/DistanceConverter';
import WeightConverter from '../converter/WeightConverter';
import TemperatureConverter from '../converter/TemperatureConverter';

export default class ConverterCreator {
    private static instance: ConverterCreator;

    private constructor() {
    }

    public static get Instance(): ConverterCreator {
        return this.instance || (this.instance = new this());
    }

    public Create(type: string): IConverter {
        switch (type) {
            case DistanceTypes.Metres:
            case DistanceTypes.Miles:
            case DistanceTypes.Versts: {
                return new DistanceConverter();
            }
            case WeightTypes.Grams:
            case WeightTypes.Poods:
            case WeightTypes.Pounds: {
                return new WeightConverter();
            }
            case TemperatureTypes.Celcius:
            case TemperatureTypes.Fahrenheit:
            case TemperatureTypes.Kelvin: {
                return new TemperatureConverter();
            }
            default: {
                throw new class implements Error {
                    message: string = `Cannot create converter for the type ${type}`;
                    name: string = 'Parse error';
                }
            }
        }
    }
}
