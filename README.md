# CRAFTD

In a world where craft beers has exploded to popularity, everyone and their mother has their own brew.

This app allows a user to keep track of the beers they taste and drink.

### Models
```
User {
  username: String,
  password: String,
  beers: {BeersSchema}
}

Beers {
  name: String,
  img: String
}
```
