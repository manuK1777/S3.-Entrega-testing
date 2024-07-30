const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(function (movie) {
    return movie.director;
  });

  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(function (movie) {
    return movie.director === director;
  });
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
  //Get the films of a certain director
  const arrayMoviesFromDir = getMoviesFromDirector(array, director);
  //Get scores of his movies
  const directorScores = arrayMoviesFromDir.map((movie) => movie.score);
  //Sum
  let sumDirectorScores = directorScores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  //Average
  let result = sumDirectorScores / arrayMoviesFromDir.length;

  console.log('EXERCICE 3 ->', parseFloat(result.toFixed(2)));
  return parseFloat(result.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {

  const arrayMovieTitles = array.map(movie => movie.title);
  let arrayMoviesSorted = arrayMovieTitles.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  let result = arrayMoviesSorted.slice(0, 20) 
  console.log('EXERCICE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear() {
  const arrayMovieYears = array.map(movie => movie.year);
  let arrayMoviesSorted = arrayMovieYears.sort((a, b) => a - b);
  console.log('EXERCICE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
