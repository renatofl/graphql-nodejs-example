const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { find, filter, concat } = require ('lodash');

// Some fake data
var movies = [
  {
    title: "Avengers: Endgame",
    plot: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    genres: [
      {name: "ACTION"},
      {name: "SCIENCE_FICTION"},
      {name: "ADVENTURE"}
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
      {name: "ACTION"},
      {name: "CRIME"},
      {name: "THRILLER"}
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

  type Mutation {
    createMovie(
      movie: MovieInput
    ): Movie
  }

  input MovieInput {
    title: String!
    plot: String!
    poster: String!
    genres: [GenreInput]!,
    productionCountries: [CountryInput]!,
    spokenLanguages: [LanguageInput]!
  }

  input GenreInput {
    name: AllowedGenre
  }

  input CountryInput {
    name: String
  }

  input LanguageInput {
    name: String
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
    name: AllowedGenre
  }
  type Country {
    name: String
  }
  type Language {
    name: String
  }

  enum AllowedGenre {
    """
      Action 
    """
    ACTION
    """
      Adventure 
    """
    ADVENTURE
    """
      Science Fiction 
    """
    SCIENCE_FICTION
    """
      Thriller 
    """
    THRILLER
    """
      Crime 
    """
    CRIME
  }
`;

// The resolvers
const resolvers = {
  Query: { 
    movies: () => movies 
  },
  Mutation: {
    createMovie: (_, {movie}) => {
      movies = concat(movies, movie);
      return movie;
    }
  }
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