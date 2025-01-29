
module.exports = async function suggestions(app){

    app.get('/', (req, res)=>{
        if(req.query.username){

            return res.status(200).send({ getquery: `fitre ${req.query.username}` });
        }else{

            return res.status(200).send({ getAll: 'get all' });
        }
    });

    app.get('/:id', (req, res)=>{
        return res.status(200).send({ getId: `${req.params.id}` });
    });
    

    app.post('/:id', (req, res)=>{
        return res.status(201).send({ getId: `${req.params.id}` });
    });

    app.put('/:id', (req, res)=>{
        return res.status(200).send({ getId: `${req.params.id}` });
    });

    app.delete('/:id', (req, res)=>{
        return res.status(200).send({ getId: `${req.params.id}` });
    });
  }
