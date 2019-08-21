import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
    Query: {
        newest: () => 'newest',
        popular: () => 'popular',
        featured: () => 'featured',
        verified: () => 'verified',
        thing: () => 'thing'
    }
};