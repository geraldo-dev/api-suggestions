const Suggestion = require('./models');


exports.getAll = async (req, res)=>{
        if(req.query.username){

            return res.status(200).send({ getquery: `fitre ${req.query.username}` });
        }else{
            const suggestion_all = await Suggestion.findAll();
            return res.status(200).send({ getAll: suggestion_all });
        }
    };

exports.getId = (req, res)=>{
        return res.status(200).send({ getId: `${req.params.id}` });
    };

exports.created = async (req, res)=>{
    try {
        const { text } = req.body;
        console.log(text);

        await Suggestion.create(text);

        return res.status(201).send({ created: `salvo` });
    } catch (error) {
        return res.send({ error: error });
    }
};

exports.update = (req, res)=>{
        return res.status(200).send({ update: `atualizado` });
    };

exports.destroy = (req, res)=>{
        return res.status(200).send({ detele: `deletado` });
    };