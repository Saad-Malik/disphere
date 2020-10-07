import gql from "graphql-tag";

const SearchCarsQuery = gql `
    query searchCar($color:String!) {
        searchCar(color:$color){
            brand
            size
            color
            power
            modal
            description
            hasTrailerHitch
        }
    }
` 

export default SearchCarsQuery;