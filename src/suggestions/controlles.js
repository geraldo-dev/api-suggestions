
module.exports = async function suggestions(app){
    
    app.get('/', (req, res)=>{
        return res.status(200).send({ hello: 'world' });
    });
  }
