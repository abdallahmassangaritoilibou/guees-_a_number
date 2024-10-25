//je céclare une fonction sans parametre.
function demanderNombre() {
  //jedeclare une variable pour stocker le nombre à saisir.
  const nombreSaisi = prompt("veuillez saisir un nombre");
  //j'affiche le nombre en entier avec Int
  const givenNumber = parseInt(nombreSaisi);
  console.log("Vous avez saisi:", givenNumber);
  //return ranvoie la valeur stocker pour pouvoir lutiliser .
  return givenNumber;
}

//je declare une function avec parametre.
function didIwin(givenNumber) {
  if (givenNumber === 22) {
    //si lenombre et (égale ==) à 22 afficher bravo. il faut mettre 2 == égale en js.
    console.log("Bravo ! Vous avez deviné le nombre ");
  } //sinon si le nombre et inferieure à 22 mettre un nombre plus gand
  else if (givenNumber < 22) {
    console.log("mettre un nombre plus grand");
  } //sinon mettre un nombre plus petit
  else {
    console.log("mettre un nombre plus petit");
  }
}
//je déclare une fonction didIwin2 avec paraméttre
function didIwin2(givenNumber) {
  if (givenNumber == 22) {
    return true;
  } else {
    return false;
  }
}

//j'ai créer un fonction gameplay:
//pour gérer les appel de fonction et la transmission de variable à une autre variable
function gamePlay() {
  const givenNumber = demanderNombre();
  let resultat = didIwin2(givenNumber); //j'ai declaré une variable poure stock le numèro
  console.log(resultat);

  if (resultat == true) {
    console.log("didIwin2==true");
    alert("bravo ! vous avez gagné");
    return;
  } else {
    //j'appel m'a fonction pour lancer le jeux en récursivité répéter
    gamePlay();
  }
}
//j'appel m'a fonction pour lancer le jeux
gamePlay();
