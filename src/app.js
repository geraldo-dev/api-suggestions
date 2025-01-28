import Fastify from "fastify";

const app = Fastify();

app.get('/', (req, res)=>{
    res.send({ hello: 'world' });
});

app.listen({ port:3000}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('http://localhost:3000/')
    }
});