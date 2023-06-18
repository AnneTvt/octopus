function flipCard() {
    const card = event.target.closest('.card');
    card.classList.toggle('is-flipped');
  }

/*si besoin de faire une icon clickable
function myFunction() {
  // Code à exécuter lorsque l'icône est cliquée
  // Par exemple, rediriger vers une autre page ou effectuer une action spécifique
  window.location.href = "http://127.0.0.1:5500/methode.html";
}*/