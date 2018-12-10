// VARIABLES

var getArticles = document.querySelector("section").children;
var getButtons = document.querySelector("form").children;

// for loop om alle children in een array te stoppen om vervolgens te filteren

for (var i = 0; i < getButtons.length; i++) {
  getButtons[i].addEventListener('click', function(event) {
    // pak het event en zet het in de functie
    filterArticles(event.target.name);
  }, true);
}

// functie om artikelen te filteren
function filterArticles(thing) {

  for (var i = 0; i < getArticles.length; i++) {

    if (getArticles[i].dataset.parent === thing) {
      // als er een match is dan zet hem op block
      getArticles[i].style.display= "block";

    } else if (thing === "alles") {
      // zet alles op display block
      getArticles[i].style.display = "block";

    } else {
      // geen match zet het op display none;
      getArticles[i].style.display = "none";
    }
  }
}
