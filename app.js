// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');




p1.innerHTML = p1.dataset.numbber = (parseInt(p1.dataset.numbber) + 10 ).toString()
p2.innerHTML = p2.dataset.text.length.toString()

p2.dataset.text = "3".toString()

p3.innerHTML = p3.dataset.list.toString()


let boolTest =  p4.dataset.bool;
boolTest = boolTest.toLowerCase() === true;

if (boolTest){
    p4.innerHTML = "La valeur est vrai"
}
else{
    p4.innerHTML = "La valeur est fausse"
}



// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

p5.dataset.numbber = '5';
p6.dataset.text = 'bla';
p7.dataset.list = '[5, 2, 3]';
p8.dataset.bool = 'false';


p5.innerHTML = p5.dataset.numbber = (parseInt(p5.dataset.numbber) + 10 ).toString()
p6.innerHTML = p6.dataset.text.length.toString()

p6.dataset.text = "3".toString()

p7.innerHTML = p7.dataset.list.toString()


let boolTest2 =  p8.dataset.bool;
boolTest2 = boolTest2.toLowerCase() === true;

if (boolTest2){
    p7.innerHTML = "La valeur est vrai"
}
else{
    p7.innerHTML = "La valeur est fausse"
}




let Personne = function (nom, prenom, age){
    this.nom = nom
    this.prenom = prenom
    this.age = age
}

John = new Personne('Doe', "John", 19);

let elem = document.createElement("div")
document.body.appendChild(elem);

elem.dataset.name = John.prenom
elem.dataset.nom = John.nom
elem.dataset.age = John.age
elem.innerHTML = 'test'
