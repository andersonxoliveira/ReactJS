import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7g4yy12mf01z211sw99mh/master',
    cache: new InMemoryCache()
})