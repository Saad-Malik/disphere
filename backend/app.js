const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolver');
const config = require('./config');
const bodyParser = require('body-parser');
const Car = require("./model/Car");


//Initializing Express
const app = express();

//Middleware for cors and body parser
app.use(bodyParser.json());



//Initialize Apollo Server
const server = new ApolloServer({
    typeDefs:schema,
    resolvers
}); 

//Middleware to connect Express and Apollo Server
server.applyMiddleware({app,path:"/graphql"});


//Connect to Mongo DB Compass and then listen for the app.
mongoose
  .connect(
    `mongodb+srv://${config.user}:${config.password}@clusterdisphere.nqkqi.gcp.mongodb.net/${config.dbname}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  ).then(
    app.listen(config.port, ()=>{
        console.log(`Express Server started at localhost:${config.port}`);
    })
  ).catch((error)=>console.warn(error));


//Test Express
app.get('/', (req,res)=>{return res.send('Hello from Express')});
