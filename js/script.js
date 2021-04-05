const  numberOfFilms = +prompt('Сколько филмов вы уже смотрели?','');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i = 0; i < 2; i++) {
   const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');
   
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
   } else {
      console.log('error');
      i--;
   }
};

if (personalMovieDB.count < 10) {
   console.log('Просмотрено мало филмьов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log('вы классический зритель');
} else if (personalMovieDB.count >= 30) {
   console.log('Да вы киноман!');
} else {
   console.log('Произошла ошибка');
}

console.log(personalMovieDB);



