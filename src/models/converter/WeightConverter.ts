import IConverter from './IConverter';
import {WeightTypes} from '../constants/Types';

export default class WeightConverter implements IConverter {
    Convert(value: string, params: any): any {
        const {from, to} = params;
        switch (from) {
            case WeightTypes.Grams: {
                switch (to) {
                    case WeightTypes.Pounds: {
                        return this.ConvertGramsPounds(value, true);
                    }
                    case WeightTypes.Grams: {
                        return value;
                    }
                    case WeightTypes.Poods: {
                        return this.ConvertGramsPoods(value, true);
                    }
                    default: {
                        throw new class implements Error {
                            message: string = `Cannot convert ${value} from ${from} to ${to}`;
                            name: string = 'Convert Error';
                        }
                    }
                }
            }
            case WeightTypes.Pounds: {
                switch (to) {
                    case WeightTypes.Pounds: {
                        return value;
                    }
                    case WeightTypes.Grams: {
                        return this.ConvertGramsPounds(value, false);
                    }
                    case WeightTypes.Poods: {
                        return this.ConvertPoundsPoods(value, true);
                    }
                    default: {
                        throw new class implements Error {
                            message: string = `Cannot convert ${value} from ${from} to ${to}`;
                            name: string = 'Convert Error';
                        }
                    }
                }
            }
            case WeightTypes.Poods: {
                switch (to) {
                    case WeightTypes.Pounds: {
                        return this.ConvertPoundsPoods(value, false);
                    }
                    case WeightTypes.Grams: {
                        return this.ConvertGramsPoods(value, false);
                    }
                    case WeightTypes.Poods: {
                        return value;
                    }
                    default: {
                        throw new class implements Error {
                            message: string = `Cannot convert ${value} from ${from} to ${to}`;
                            name: string = 'Convert Error';
                        }
                    }
                }
            }
            default: {
                throw new class implements Error {
                    message: string = `Cannot convert ${value} from ${from} to ${to}`;
                    name: string = 'Convert Error';
                }
            }
        }
    }

    private ConvertGramsPounds(value: string, direction: boolean): number {
        /*
        * @params
        * value: string - value to be converted
        * direction: boolean - if true, convert from Grams to Pounds
         */
        const massValue: number = 453.592;
        const num: number = parseFloat(value);
        return direction ?
            num / massValue :
            num * massValue;
    }

    private ConvertGramsPoods(value: string, direction: boolean): number {
        /*
        * @params
        * value: string - value to be converted
        * direction: boolean - if true, convert from Grams to Poods
         */
        const massValue: number = 16380.687;
        const num: number = Number(value);
        return direction ?
            num / massValue :
            num * massValue;
    }

    private ConvertPoundsPoods(value: string, direction: boolean): number {
        /*
        * @params
        * value: string - value to be converted
        * direction: boolean - if true, convert from Pounds to Poods
         */
        const massValue: number = 36.113;
        const num: number = Number(value);
        return direction ?
            num / massValue :
            num * massValue;
    }
};
