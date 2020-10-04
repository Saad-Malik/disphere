const Car = require("../model/Car");

const resolvers = {
    
    Query:{
        greet:()=>{
            return "Hello from resolver";
        },
        getCars: async () => await Car.find({}).exec(),
        getACar: async (_,args)=>await Car.findById(args.id).exec(),
        
    },

    Mutation:{
        addCar: async(_,args)=>{
              try {
                  let res = await Car.create(args);
                  return res;
                } catch (error) {
                  return error.message
              }  
        }
    }
}

module.exports=resolvers;


