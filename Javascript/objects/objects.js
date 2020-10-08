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
}

document.getElementById("users").innerHTML = out;

