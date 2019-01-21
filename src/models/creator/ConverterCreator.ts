import IConverter from '../converter/IConverter';
import DistanceConverter from '../converter/DistanceConverter';
import WeightConverter from '../converter/WeightConverter';
import TemperatureConverter from '../converter/TemperatureConverter';

export default class ConverterCreator {
    private static instance: ConverterCreator;
    private readonly distanceConverter: IConverter;
    private readonly temperatureConverter: IConverter;
    private readonly weightConverter: IConverter;

    private constructor() {
        this.distanceConverter = new DistanceConverter();
        this.temperatureConverter = new TemperatureConverter();
        this.weightConverter = new WeightConverter();

        this.distanceConverter.iConverter = this.temperatureConverter;
        this.temperatureConverter.iConverter = this.weightConverter;
    }

    public static get Instance(): ConverterCreator {
        return this.instance || (this.instance = new this());
    }

    public Convert(value: string, params: any): string | number {
        const {from, to} = params;
        return this.distanceConverter.Convert(value, {from, to});
    }
}
