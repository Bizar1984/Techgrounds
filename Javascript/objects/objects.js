function Person(name, age) {
	this.name = name ;
	this.age = age ;
}
	
const persons = [
	new Person ("Jan" , 24 ),
	new Person ("Klaas" , 15 ),
	new Person ("Yanis" , 42 ),
	new Person ("Rupel" , 55 ),
	new Person ("Hendrik" , 32 ),
	new Person ("Mono" , 28 ),
	new Person ("West" , 23 ),
];

persons.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));


var out="";
for(var i=0; i<persons.length; i++){
  out+="<p>"+persons[i]['name']+", "+persons[i]['age']+"</p>\n";
  console.log(persons[i].name);
}

document.getElementById("users").innerHTML = out;


// constructor function
function Movies(name, releaseYear, genre, ratings) {
	this.name = name;
	this.releaseYear = releaseYear;
	this.genre = genre;
	this.ratings = ratings;
	this.watch = () => {
	  console.log("Watch Online");
	};
  }
  
 const movies = [
	new Movies("Dead Poets Society", 1989, ["Drama", "Teen"], {
		IMDb: "8.1 / 10",
		Metacritic: "79%"
	  }),
	new Movies("Rocky", 1976, ["Drama", "Sports"], {
		IMDb: "8.1 / 10",
		Metacritic: "70%"
	  })
] 
 
  
movies.sort((a, b) => parseFloat(a.name) - parseFloat(b.name));

var moviesOutput="";
for(var i=0; i< movies.length; i++){
  moviesOutput+="<p>"+movies[i]['name']+", "+movies[i]['releaseYear']+" "+movies[i]['genre']+" "+"</p>\n";
  console.log(movies[i].ratings);
}
// how to output the ratings object? returns undefined

document.getElementById("movies").innerHTML = moviesOutput;
// console.log(typeof movies)

// Person object with object initializers. Advantages/disadvantages compared to constructors?
// object literal
let Club = {
	name: "Nylan",
	sport: "tennis",
	members: 300,
	contact: {
		address: "Harlingerstraatweg 36",
		phone: 01036373637,
		contact: "Josef"
	}
}

console.log(Club.name);
// object literal doesn't have the ability to instantiate new objects quickly
// with the constructor method you can change things, like a function which then will apply to all instances!
// object literals avoid polluting the global namespace and helps to organize your code??
class Series {
	constructor(name, releaseYear, genre, ratings) {
	  this.name = name;
	  this.releaseYear = releaseYear;
	  this.genre = genre;
	  this.ratings = ratings;
	}
	watch() {
	  console.log("Watch Online");
	}
  }

  let the_wire = new Series("The Wire", 2004, ["Drama", "politics"], {
	IMDb: "9.1 / 10",
	Metacritic: "95%"
  });
  console.log(the_wire);









