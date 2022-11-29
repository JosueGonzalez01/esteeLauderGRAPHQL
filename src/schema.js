import { makeExecutableSchema } from "graphql-tools";
import {resolvers} from "./resolvers"

//parameters with what we need in the resolver
//mutation we can make changes
const typeDefs = `
    type Query{
        Categories: [Category]
        Brands: [Brand]
        Products: [Product]
    }

    type Product{
        _id: ID
        name: String!
        size: String
        color: String
        price: String
        brand: Brand
        category: Category
        amount: Int
        isActive: Boolean
    }

    type Category{
        _id: ID
        name: String!
        isActive: Boolean

    }
    type Brand{
        _id: ID
        name: String!
        isActive: Boolean

    }

    type Mutation{
        createProduct(input: ProductInput): Product
        deleteProduct(_id: ID): Product 
        updateProduct(_id: ID, input: ProductInput): Product 
        createCategory(input: CategoryInput): Category
        deleteCategory(_id: ID): Category 
        updateCategory(_id: ID, input: CategoryInput): Category 
        createBrand(input: BrandInput): Brand
        deleteBrand(_id: ID): Brand 
        updateBrand(_id: ID, input: BrandInput): Brand 
    }

    input ProductInput{
        name: String!
        size: String
        color: String
        price: String
        amount: Int
    }
    input CategoryInput{

        name: String!
    }
    input BrandInput{

        name: String!
    }
`;

export default makeExecutableSchema({

    typeDefs: typeDefs,
    resolvers: resolvers
})