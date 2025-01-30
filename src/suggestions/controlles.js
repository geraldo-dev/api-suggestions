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
        const { id } = req.params;
     
        const suggestion = await Suggestion.findById( id );

        if(suggestion){
            
            return res.status(200).json({ getId: suggestion });
        }else{

            return res.status(404).json({ msg: 'not found' });
        }
        
    } catch (error) {
        return res.send({ error: error });
    }
};

exports.created = async (req, res)=>{
    try {
        const { text } = req.body;
        //verica se todos os campos estao preencidos
        console.log(text);

        await Suggestion.create(text);

        return res.status(201).send({ created: `salvo` });
    } catch (error) {
        return res.send({ error: error });
    }
};

exports.update = async (req, res)=>{
    try {
        
        const { text } = req.body;
        const { id } = req.params;

        const findSuggestion = await Suggestion.findById(id);
        
        if(findSuggestion){

            await Suggestion.updateText(id, text);

            return res.status(200).json({ getId: 'atualizado com sucesso' });
        }else{

            return res.status(404).json({ msg: 'not found' });
        }


    } catch (error) {
        
        return res.status(500).send({ erro : error });
    }
    };

exports.destroy = async (req, res)=>{
    try {
        const { id } = req.params;
        const suggestion = await Suggestion.findById( id );

        if(suggestion){
            await Suggestion.delete(id)
            
            return res.status(200).json({ msg: 'deletado com sucesso' });
        }else{

            return res.status(404).json({ msg: 'not found' });
        }
        
    } catch (error) {
        return res.send({ error: error });
    }
    };