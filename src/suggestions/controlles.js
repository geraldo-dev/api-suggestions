const Suggestion = require('./models');


exports.getAll = async (req, res)=>{
        if(req.query.username){

            return res.status(200).send({ getquery: `fitre ${req.query.username}` });
        }else{
            const suggestion_all = await Suggestion.findAll();
            return res.status(200).send({ getAll: suggestion_all });
        }
    };

exports.getId = async (req, res)=>{

    try {
        console.log( req.params.id)
        //vericar se existe
        const suggestion = await Suggestion.findById( req.params.id );
        console.log(suggestion);
        return res.status(200).json({ getId: suggestion });
        
    } catch (error) {
        return res.send({ error: error });
    }
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