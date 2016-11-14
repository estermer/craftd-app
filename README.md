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

Beer {
  name: String,
  img: String,
  comment: String,
  rating: Integer
}
```

### MVP
```
1. Has 2 models
2. Authorization
3. Must be MEAN stack
```

### User Stories

 - User can create an account after clicking on a button on the homme page
 - User can visit the home page and click on login enter credentials and login
 - User can search for a beer name which will return a list of relative beers
 - User can select a beer from the list
 - User can check in a beer that was selected and add a rating and a comment
 - User can view his list of beers checked in, showing the images and name
 - User can click on a beer and show the image, name, comment, and rating
 - User can edit an existing beer checked in to change the comment or rating
 - User can delete a beer that has been checked in
 - User can see a Total number of beers checked in on the index page
###### REACH
 - User can authorize app with facebook oauth to add a avatar
 
## Progress

#### Day 1
made a mistake of not getting started with planning first. I thought that I needed to first see what information i would get from a facebook login to set up the user model, but in terms of time I figured I would tackle this after creating a normal custom login and set up the models and plan everyting out for starters. After setting up an initial server, repo and github, took the time to write down user stories and my models. Did some research on the API for where I am getting my beer information from.
