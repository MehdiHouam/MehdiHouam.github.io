
//EXERCICE 3

function perimetre() {
    var resultat = 0;
    switch (arguments.length) {
        case 0:
            resultat = 0;
            console.log("Ceci est une erreur");
            
            break;
        case 1:
            resultat = arguments[0] * 4;
            console.log("Ceci est un carré");
            break;
        case 2:
            resultat = arguments[0] * 2 + arguments[1] * 2;
            console.log("ceci est un rectangle");
            break;
        case 3:
            resultat = arguments[0] + arguments[1] + arguments[2];
            console.log("Ceci est un triangle");
            break;
        default:
            for(i = 0; i < arguments.length; i++)
            resultat = resultat + arguments[i];
    }
    console.log(resultat);
}
perimetre();         
perimetre(5);       
perimetre(5, 10);
perimetre(3, 2, 1);    
perimetre(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);