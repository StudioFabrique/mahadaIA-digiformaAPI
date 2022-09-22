import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";



  const client = new ApolloClient({
    uri: 'https://app.digiforma.com/api/v1/graphiql',
    cache: new InMemoryCache()
  });


  // const client = ...

client
.query({
  query: gql`
  query {
    trainees{
      firstname
    }
  }
  `
})
.then(result => console.log(result));