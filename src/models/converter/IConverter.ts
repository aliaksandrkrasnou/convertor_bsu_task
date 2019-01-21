export default interface IConverter {
    iConverter: IConverter;

    Convert(value: any, params: Object): any;
};
