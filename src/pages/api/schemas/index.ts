import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type property {
        _id: String
        name: String
        price: Float
        address: String
        propertyType: EproperyType
        saleType: EsalesType
        images: [String]
    }
    enum EproperyType {
        House
        Shop
    }
    enum EsalesType {
        ForSale
        New
    }
    input propertyInput {
        name: String!
        price: Float!
        address: String!
        propertyType: EproperyType!
        saleType: EsalesType!
        images: [String]!
    }
    type Query {
        hello: String
        GetProperties: [property]
        GetProperty(_id: String!): property!
    }
    type Mutation {
        PostProperty(input: propertyInput!): property
        UpdateProperty(_id: String!, input: propertyInput!): property
        DeleteProperty(_id: String!): property
    }
`;
