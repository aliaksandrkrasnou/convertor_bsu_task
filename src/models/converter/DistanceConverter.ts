import IConverter from './IConverter';
import {DistanceTypes} from '../constants/Types';

export default class DistanceConverter implements IConverter {
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
            case DistanceTypes.Metres:
            case DistanceTypes.Miles:
            case DistanceTypes.Versts: {
                return this.ConvertDistance(value, params);
            }
            default: {
                return this._iConverter.Convert(value, params);
            }
        }
    }

    private ConvertDistance(value: string, params: any): number {
        const {from, to} = params;
        switch (from) {
            case DistanceTypes.Miles: {
                switch (to) {
                    case DistanceTypes.Metres: {
                        return this.ConvertMileMetre(value, true);
                    }
                    case DistanceTypes.Miles: {
                        return parseFloat(value);
                    }
                    case DistanceTypes.Versts: {
                        return this.ConvertMileVerst(value, true);
                    }
                    default: {
                        throw new class implements Error {
                            message: string = `Cannot convert ${value} from ${from} to ${to}`;
                            name: string = 'Distance Convert Error';
                        }
                    }
                }
            }
            case DistanceTypes.Metres: {
                switch (to) {
                    case DistanceTypes.Metres: {
                        return parseFloat(value);
                    }
                    case DistanceTypes.Miles: {
                        return this.ConvertMileMetre(value, false);
                    }
                    case DistanceTypes.Versts: {
                        return this.ConvertMetreVerst(value, true);
                    }
                    default: {
                        throw new class implements Error {
                            message: string = `Cannot convert ${value} from ${from} to ${to}`;
                            name: string = 'Distance Convert Error';
                        }
                    }
                }
            }
            case DistanceTypes.Versts: {
                switch (to) {
                    case DistanceTypes.Metres: {
                        return this.ConvertMetreVerst(value, false);
                    }
                    case DistanceTypes.Miles: {
                        return this.ConvertMileVerst(value, false);
                    }
                    case DistanceTypes.Versts: {
                        return parseFloat(value);
                    }
                    default: {
                        throw new class implements Error {
                            message: string = `Cannot convert ${value} from ${from} to ${to}`;
                            name: string = 'Distance Convert Error';
                        }
                    }
                }
            }
            default: {
                throw new class implements Error {
                    message: string = `Cannot convert ${value} from ${from} to ${to}`;
                    name: string = 'Distance Convert Error';
                }
            }
        }
    }

    private ConvertMileMetre(value: string, direction: boolean): number {
        /*
        * @params
        * value: string - value to be converted
        * direction: boolean - if true, convert from miles to metres
         */
        const mileInMetre: number = 1609.34;
        const num: number = parseFloat(value);
        return direction ?
            num * mileInMetre :
            num / mileInMetre;
    }

    private ConvertMileVerst(value: string, direction: boolean): number {
        /*
        * @params
        * value: string - value to be converted
        * direction: boolean - if true, convert from miles to versts
         */
        const mileInVerst: number = 1.50857;
        const num: number = parseFloat(value);
        return direction ?
            num * mileInVerst :
            num / mileInVerst;
    }

    private ConvertMetreVerst(value: string, direction: boolean): number {
        /*
        * @params
        * value: string - value to be converted
        * direction: boolean - if true, convert from metres to versts
         */
        const verstInMetre: number = 1066.8;
        const num: number = parseFloat(value);
        return direction ?
            num / verstInMetre :
            num * verstInMetre;
    }
};
