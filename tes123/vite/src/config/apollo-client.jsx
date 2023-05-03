import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: "https://novel-duckling-68.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret":
        "o4mUnG92HOZiJIaXxRG1slDUAbcTtwCRK16Cdgd5SGDGzzVOVsVyFlI3p06qAQsh",
    },
});