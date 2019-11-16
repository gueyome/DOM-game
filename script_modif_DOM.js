function changeTitles() {
  let data = document.body.getElementsByClassName("jumbotron-heading");
  console.log(data);
  document.body.getElementsByClassName("jumbotron-heading")[0].textContent = "Ce que j'ai appris à THP";
  document.body.getElementsByClassName("lead text-muted")[0].textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

function changeCallToActions(){
  document.body.getElementsByClassName("btn btn-primary my-2")[0].textContent = "OK je veux tester !";
  document.body.getElementsByClassName("btn btn-primary my-2")[0].href = "http://www.thehackingproject.org";
  document.body.getElementsByClassName("btn btn-secondary my-2")[0].textContent = "Non merci";
  document.body.getElementsByClassName("btn btn-secondary my-2")[0].href = "https://www.pole-emploi.fr/accueil/";
}

function changeLogoName(){
  document.body.getElementsByClassName("navbar-brand d-flex align-items-center")[0].getElementsByTagName("strong")[0].textContent = "The THP Experience";
  document.body.getElementsByClassName("navbar-brand d-flex align-items-center")[0].getElementsByTagName("strong")[0].style.fontSize = "2em";
}

function populateImages(){
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  // boucle qui fait les lignes
  for (let count = 0; count <= 8; count++){
    console.log(count);
    console.log (document.body.getElementsByClassName("card-img-top")[count]);
    document.body.getElementsByClassName("card-img-top")[count].setAttribute("data-src", imagesArray[count]);
  }
}

changeTitles();
changeCallToActions();
changeLogoName();
populateImages();