const Fastify = require("fastify");
const sugestions = require("./suggestions/controlles");

async function  start () {
        
    const app = Fastify({ logger: true });

    //routes
    app.register(sugestions,{ prefix : '/suggestion' });

    app.listen({ port:3000}).then(()=> console.log('server...'));
}


start();