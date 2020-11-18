const Hapi = require('hapi');
const mongoose = require('mongoose');

const server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: 3000
})



const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
});

const status = mongoose.STATES[mongoose.connection.readyState]

server.route({
    method: 'GET',
    path: '/connection',
    handler: function(request, reply){   
        if(status == 'connected'){
            reply(status).code(201)
        } 
        reply(status).code(401)
    } 
})

server.route({
    method: 'POST',
    path: '/add/dummy/model',
    handler: function(request, reply){
        if(status == 'connected'){
            mongoose.model('item', ItemSchema).save();
            reply(status).code(201)
        } 
        reply(status).code(401)
    }
})

server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply){

    }
})

const launch = async () => {
    try {
        await server.start(); 
    } catch (err) {
        console.error(err);
        process.exit(1);
    };
    
    console.log('Server running at: ', server.info.uri);
}

launch();
