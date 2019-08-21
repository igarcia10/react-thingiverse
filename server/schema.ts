import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema, ITypeDefinitions } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs: ITypeDefinitions = `
    type Query {
        newest: [Thing]
        popular: [Thing]
        featured: [Thing]
        verified: [Thing]
        thing(id: Int!): Thing
    }

    type Thing {
        id: ID
        name: String
        url: String
        public_url: String
        thumbnail: String
        creator: Creator
        is_private: Boolean
        is_purchased: Boolean
        is_published: Boolean
    }

    type Creator {
        id: ID
        name: String
        first_name: String
        last_name: String
        url: String
        public_url: String
        thumbnail: String
    }
`;

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers
})