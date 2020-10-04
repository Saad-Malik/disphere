import gql from "graphql-tag";

const CarsQuery = gql `
    query getCars {
        getCars{
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

export default CarsQuery;