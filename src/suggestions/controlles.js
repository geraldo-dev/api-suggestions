


exports.getAll = (req, res)=>{
        if(req.query.username){

            return res.status(200).send({ getquery: `fitre ${req.query.username}` });
        }else{

            return res.status(200).send({ getAll: 'get all' });
        }
    };

exports.getId = (req, res)=>{
        return res.status(200).send({ getId: `${req.params.id}` });
    };

exports.created = (req, res)=>{
        return res.status(201).send({ created: `salvo` });
    };

exports.update = (req, res)=>{
        return res.status(200).send({ update: `atualizado` });
    };

exports.destroy = (req, res)=>{
        return res.status(200).send({ detele: `deletado` });
    };