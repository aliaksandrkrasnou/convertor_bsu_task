import ConverterCreator from '../models/creator/ConverterCreator';

export const convert = function (req: any, res: any) {
    const {value, from, to} = req.query;
    const creator: ConverterCreator = ConverterCreator.Instance;
    try {
        const convertedValue = creator.Create(from).Convert(value, {from, to});

        res.send({convertedValue, from, to, value});
    } catch (e) {
        res.send({error: e, from, to, value})
    }
};