const Fastify = require("fastify");
const sugestions = require("./suggestions/controlles");

async function  start () {
        
    const app = Fastify({ logger: true });


    // app.register(require("./routes"));
    app.register(sugestions);

    app.listen({ port:3000}).then(()=> console.log('server...'));
}


start();