// Se number è uguale a 1
// result = 'ciao'
//  Se number è uguale a 2
// result = 'buongiorno'
//  Se number è uguale a 3
// result = 'buonasera'
// in tutti gli altri casi result = 'arrivederci

let number = 1;
let result;

// if(number === 1) {
//     result = 'ciao';
// } else if(number === 2) {
//     result = 'buongiorno';
// } else if(number === 3) {
//     result = 'buonasera';
// } else {
//     result = 'arrivederci';
// }

switch(number) {
    case 1:
        result = 'ciao';
        break;
    case 2:
        result = 'buongiorno';
        break;
    case 3:
        result = 'buonasera';
        break;
    default:
        result = 'arrivederci';
}

console.log(result);