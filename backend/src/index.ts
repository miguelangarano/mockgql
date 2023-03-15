import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getActiveIngredient, getActiveIngredients, getMeasureUnit, getMeasureUnits, getMeasureUnitTypes, getNewProductData, getProduct, getProducts, getStatus, getSupplyCategories, getSupplyCategory, getSupplyType, getSupplyTypes } from "./resolvers";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Status {
    id: ID!
    name: String
  }

  type SupplyType {
    id: ID!
    name: String
    status: Status
  }

  type SupplyCategory {
    id: ID!
    name: String
    supplyType: SupplyType
    status: Status
  }

  type ActiveIngredient {
    id: ID!
    name: String
    status: Status
  }

  type MeasureUnitType {
    id: ID!
    name: String
  }

  type MeasureUnit {
    id: ID! 
    name: String
    measureUnitType: MeasureUnitType
    status: Status
  }

  type Product {
    id: ID!
    name: String
    internalId: String
    supplyType: SupplyType
    supplyCategory: SupplyCategory
    activeIngredients: [ActiveIngredient]
    doseUnit: MeasureUnit
    dose: Float
    presentationUnit: MeasureUnit
    presentationAmount: Float
    status: Status
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  type Query {
    status: [Status]
    supplyTypes: [SupplyType]
    supplyType: SupplyType
    supplyCategories: [SupplyCategory]
    supplyCategory: SupplyCategory
    activeIngredients: [ActiveIngredient]
    activeIngredient: ActiveIngredient
    measureUnitTypes: [MeasureUnitType]
    measureUnits: [MeasureUnit]
    measureUnit: MeasureUnit
    products: [Product]
    product(id: String): Product
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    status: () => getStatus(),
    supplyTypes: () => getSupplyTypes(),
    supplyType: (id: string) => getSupplyType(id),
    supplyCategories: () => getSupplyCategories(),
    supplyCategory: (id: string) => getSupplyCategory(id),
    activeIngredients: () => getActiveIngredients(),
    activeIngredient: (id: string) => getActiveIngredient(id),
    measureUnitTypes: () => getMeasureUnitTypes(),
    measureUnits: () => getMeasureUnits(),
    measureUnit: (id: string) => getMeasureUnit(id),
    products: () => getProducts(),
    product: (_: any, { id }:{id: string}) => getProduct(id)
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
