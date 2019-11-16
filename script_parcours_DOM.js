// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
var div = document.getElementsByTagName('p');
console.log(div.length);

// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
console.log(document.getElementById('coucou'));

// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
console.log(document.getElementsByTagName('a')[2].href);

// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(document.getElementsByClassName('compte-moi').length);

// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(document.querySelectorAll("li.compte-moi").length);

// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
console.log(document.querySelectorAll("ol > li.compte-moi").length);

// Question 7
console.log(document.body.querySelector("div").querySelector("ul").childNodes[1].innerHTML);
