const {gql} = require('apollo-server-express');

const schema = gql`
    type Query{
        greet:String
        getCars:[Car]
        getACar(id:ID!):Car
    }

    type Mutation{
        addCar(brand:String!,
               size:String,
               color:String!,
               power:Int,
               modal:Int,
               description:String,
               hasTrailerHitch:Boolean
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
    }

    enum Size{
        SMALL
        LARGE
    }
`;

module.exports= schema;