const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Some fake data
const movies = [
  {
    title: "Avengers: Endgame",
    plot: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    genres: [
      {name: "Action"},
      {name: "Science Fiction"},
      {name: "Adventure"}
    ],
    productionCountries: [
      {name: "us"}
    ],
    spokenLanguages: [
      {name: "us"},
      {name: "ja"}
    ]
  },
  {
    title: "John Wick",
    plot: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    poster: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
    genres: [
      {name: "Action"},
      {name: "Crime"},
      {name: "Thriller"}
    ],
    productionCountries: [
      {name: "US"},
      {name: "CN"}
    ],
    spokenLanguages: [
      {name: "us"},
      {name: "hu"},
      {name: "ru"}
    ]
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { 
    movies: [Movie]
  }
  
  type Movie {
    """
      Movie title
    """
    title: String, 
    """
      Movie plot
    """
    plot: String,
    """
      Movie poster
    """
    poster: String
    genres: [Genre]
    productionCountries: [Country]
    spokenLanguages: [Language]
  }
  type Genre {
    name: String
  }
  type Country {
    name: String
  }
  type Language {
    name: String
  }
`;

// The resolvers
const resolvers = {
  Query: { movies: () => movies }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphiql to run queries!');
});