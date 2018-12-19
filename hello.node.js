/**
 * @name hello.node
 * @desc Juste pour les algorithmes
 * @author Aélion - Déc.2018
 * @version 1.0.0
 */
/**
 * Retourne valeur maximum entre deux valeurs
 *  private max(int currentMax, int value)
 * @param {*} currentMax Valeur maximum courante
 * @param {*} value Valeur lue dans tableau
 * @return number La valeur la plus élevée entre currentValue et value
 */
function max(currentMax, value) {
    console.log('Compare : ' + currentMax + ' à ' + value);
    if (value > currentMax) {
        return value;
    } else {
        return currentMax;
    }
}

/**
 * Retourne la valeur minimum entre deux valeurs
 * private min(int currentMin, int value)
 * @param {*} currentMin valeur min courante
 * @param {*} value valeur lue dans tableau
 * @return number la valeur la plus petite entre currentValue et value
 */
function min(currentMin, value) {
    if (value < currentMin) {
        return value;
    }
    return currentMin;
}

/**
 * wrapper pour fonction min ou max
 * public int minOrMax (int current, int value, booleen wantMax =false)
 * @param {*} current 
 * @param {*} value 
 * @param {*} wantMax 
 */
function minOrMax(current, value, wantMax = true) {
    if (wantMax) {
        return max(current, value);
    }
    return min(current, value);
}


// Création d'une variable de type tableau
/**
 * @var array
 * Tableau de nombres entiers
 */
const tablo = [25, 50, 256, 312, 3, 22, 8];

/**
 * @var number
 * Cumul des valeurs du tableau
 */

let total = 0;
let maxIs = tablo[0];
let minIs = tablo[0];
let nvTablo = [];
let indice = 0;

// Boucle de parcours du tableau
while (tablo.length > 0) {
    for (let i = 0; i < tablo.length; i++) {
        /*if (tablo[i] % 2 == 0) {
            console.log('Indice ' + i + ' est pair ' + tablo[i]);
        } else {
            console.log(tablo[i] + ' est impair');
        }
        // Cumul du total
        total = total + tablo[i]; */

        /*  if (i > 0) {
              maxIs = minOrMax(maxIs, tablo[i]);
              minIs = minOrMax(minIs, tablo[i], false);
          } */

        if (tablo[i] < minIs) {
            minIs = tablo[i];
            indice = i;
        }
    }
    nvTablo.push(minIs);
    tablo.splice(indice, 1);
    minIs = 9999;
}


//Fin parcours du tableau
//console.log(' Valeur maximum ' + maxIs + ' min ' + minIs + ' total ' + total);
console.log(nvTablo);

