# Frontend Movie Recommendation System

This Project accomplish top 50 Movie suggest for user from previously liked movies with quick and efficiently as possible way.<br>
this project fetch suggest from created API point that source [here](). this only frontend made by [bit_guber](https://github.com/bit-guber/Portfolio) with React + Vite + TypeScript tools.

### Currently, How it Works? It follows a few steps:

- [Initially Page](#home-page)
- [Selected a Movie](#watched-and-liked-movie)
- [ReConfiguring Recommended Page](#recommended-page)

## Home Page

There will be Top 100 Popular Movies based on reviews count each movie in MovieLens [Dataset](https://grouplens.org/datasets/movielens/) which were collected 9,734 movies over various periods of time.<br><br>
this may be various from real time top movie but focus on dataset is a viral source information.

## Watched and Liked Movie

Everytime a user select a movie from the list then redirect API point.

## Recommended Page

this where API server response come to work, Response contains high probability movies that similar to previous Liked Movie list.<br><br> Actually response produce by The famous SVD Machine learning algorithm based on Matrix Factorization and this same used [Simon Funk](https://sifter.org/~simon/journal/20061211.html) during the Netflix Recommended Engine Prize. also that produce efficient and more relate suggestion.
