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
  const arrayMovieTitles = array.map((movie) => movie.title);
  let arrayMoviesSorted = arrayMovieTitles.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: 'base' })
  );
  
  let result = arrayMoviesSorted.slice(0, 20);
  console.log('EXERCICE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
 
 // Sort the array by year and then by title if the years are the same
  array.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });

  //Map to new array
  let result = array.map((movie) => {
    return { title: movie.title, year: movie.year };
  });

  console.log('EXERCICE 5 ->', result);
  return result;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  let moviesByGenre = array.filter((movie) => movie.genre.some(g => genre.includes(genre)));

  let totalScore = moviesByGenre.reduce((accumulator, movie) => {
    return accumulator + movie.score;
  }, 0);

  let averageScoreByGenre = totalScore / moviesByGenre.length;

  let result = parseFloat(averageScoreByGenre.toFixed(2));

  console.log('EXERCICE 6 ->', result);
  return result
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  const arrayMoviesDurInMinutes = array.map(movie => {
    return {
      ...movie,
      duration: convertHoursToMinutes(movie.duration)
    };
  });
  
  function convertHoursToMinutes(string) {
    //hours
    let arrayHours = string.split("");
    arrayHours.splice(1, 7);
    let hours = parseInt(arrayHours.join(""));
    let hoursToMinutes = hours * 60;
  
    // //minutes
    let minutes = 0;
  
    if (string.length > 2) {
      let arrayMinutes = string.split("");
      arrayMinutes.splice(0, 3);
      arrayMinutes.splice(2, 3);
      minutes = parseInt(arrayMinutes.join(""));
    }
  
    let result = hoursToMinutes + minutes;
    return result;
  }

    let result = arrayMoviesDurInMinutes;

    console.log('EXERCICE 7 ->', result);
    return result
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let arrayMoviesByYear = array.filter(function (movie) {
    return movie.year === year;
  });

  let arraySortedBestScores = arrayMoviesByYear.sort((a, b) => b.score - a.score); //Descending order

  let result = [arraySortedBestScores[0]];

  console.log('EXERCICE 8 ->', result);
  return result;
}

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
