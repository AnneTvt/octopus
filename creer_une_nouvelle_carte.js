/*page javascript pour "créer une nouvelle carte" voir si on créer un dossier js ?*/

$(document).ready(function() {
    console.log("jQuery est prêt !");
  });


function effacerTexteDefaut(champ) {
    if (champ.value === champ.defaultValue) {
      champ.value = '';
    }
  }