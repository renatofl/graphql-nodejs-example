# graphql-nodejs-example

## Ex-1

Query de Livros

## Ex-2

Query de Filmes

```graphql
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
```

## Ex-3

Query de Filmes com descrição dos campos

## Ex-4

Mutation para adicionar filme

```graphql
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
```

## Ex-5

Enums nos gêneros

```graphql
mutation {
  createMovie(movie:{
    title: "The Expendables",
    plot: "A CIA operative hires a team of mercenaries to eliminate a Latin dictator and a renegade CIA agent."
    poster: "https://m.media-amazon.com/images/M/MV5BNTUwODQyNjM0NF5BMl5BanBnXkFtZTcwNDMwMTU1Mw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    genres: [
      {name: ACTION},
      {name: ADVENTURE}
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
```

## Ex-6

Campo name do Gênero como deprecado

```graphql
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
      nameEnum
    }
  }
}
```

## Ex-7

Query com filtro

```graphql
query {
  movie(imdbId: "tt2911666") {
    title
    poster
    plot
    spokenLanguages {
      name
    }
    productionCountries {
      name
    }
    genres {
      name
      nameEnum
    }
  }
}
```
