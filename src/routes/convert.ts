import ConverterCreator from '../models/creator/ConverterCreator';

export const convert = function (req: any, res: any) {
    const {value, from, to} = req.query;
    const converter: ConverterCreator = ConverterCreator.Instance;
    try {
        const convertedValue = converter.Convert(value, {from, to});

        res.send({convertedValue, from, to, value});
    } catch (e) {
        res.send({error: e, from, to, value})
    }
};