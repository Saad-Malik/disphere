const {gql} = require('apollo-server-express');

const schema = gql`
    type Query{
        greet:String
        
        getCars:[Car]
        getACar(id:ID!):Car

        getUsers:[User]
        getAUser(id:ID):User
        searchCar(color:String):[Car]
    }

    type User{
        name:String
        email:String
    }

    type Mutation{
        addUser(name:String,email:String):User
        addCar(brand:String!,
               size:String,
               color:String!,
               power:Int,
               modal:Int,
               description:String,
               hasTrailerHitch:Boolean,
               userID:String!
               ):Car
    }
    
    type Car{
        id:ID!
        brand:String!
        size(carSize: Size):String
        color:String
        power:Int
        modal:Int!
        description:String
        hasTrailerHitch:Boolean!
        user:User
    }

    enum Size{
        SMALL
        LARGE
    }
`;

module.exports= schema;