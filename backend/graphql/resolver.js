const Car = require("../model/Car");
const User = require("../model/User");

const resolvers = {
    
    Query:{
        greet:()=>{
            return "Hello from resolver";
        },
        getCars: async () => {
            let cars = await Car.find({}).exec();
            return cars;
        },
        getACar: async (_,args)=>await Car.findById(args.id).exec(),

        getUsers: async () => await User.find({}).exec(),
        getAUser: async (_,args)=>await User.findById(args.id).exec(),

        searchCar: async (_,args) => {
            let cars = await Car.find({color:args.color}).exec()
            return cars;
        }
    },

    Mutation:{
        addUser: async(_,args)=>{
            try {
                let res = await User.create(args);
                return res;

            } catch (error) {
                return error.message
            }
        },
        addCar: async(_,args)=>{
              try {
                  let car = await Car.create(args);
                  return car;
                } catch (error) {
                  return error.message
              }  
        }
    }
}

module.exports=resolvers;


