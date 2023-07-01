// Fonction pour ouvrir sa localisation dans Google Maps
function ouvrirCarte(ville) {
    var adresse = encodeURIComponent(ville);
    var url = 'https://www.google.com/maps/search/?api=1&query=' + adresse;
    window.open(url);
}

// Fonction pour tourner l'image d'elle
var image1Src = "../img/Louane_SIMS.jpg";
var image2Src = "../img/Louane.jpg";
var imageSIMS = document.getElementById("imageSIMS");

function changerImage() {
    var parentDiv = imageSIMS.parentElement;
    if (imageSIMS.src === image1Src) {
        imageSIMS.src = image2Src;
    } else {
        imageSIMS.src = image1Src;
    }
}