# graphql-nodejs-example

## Ex-1

Query de Livros

## Ex-2

Query de Filmes

query {
  movies {
    title
    plot
    poster
    spokenLanguages {
      name
    }
    productionCountries {
      name
    }
    genres {
      name
    }
  }
}

## Ex-3

Query de Filmes com descrição dos campos

## Ex-4

Mutation para adicionar filme

mutation {
  createMovie(movie:{
    title: "The Expendables",
    plot: "A CIA operative hires a team of mercenaries to eliminate a Latin dictator and a renegade CIA agent."
    poster: "https://m.media-amazon.com/images/M/MV5BNTUwODQyNjM0NF5BMl5BanBnXkFtZTcwNDMwMTU1Mw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    genres: [
      {name: "Action"},
      {name: "Adventure"}
    ],
    productionCountries: [
      {name: "US"},
      {name: "Bulgaria"}
    ],
    spokenLanguages: [
      {name: "us"},
      {name: "es"}
    ]
  }) {
    title
    plot
    poster
    spokenLanguages {
      name
    }
    productionCountries {
      name
    }
    genres {
      name
    }
  }
}
