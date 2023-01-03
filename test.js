
// switch (light) {
//     case "green":
//         console.log('drive')
//         break;
//     case "orange":
//         console.log('get ready')
//     case "red":
//         console.log('don\'t drive')   
//     default:
//         console.log('The light is not green, orange, or red');
//         break;
    
// }


// if (light == 'green') {
//     console.log('drive')
// }
// else if(light == 'red'){
//     console.log('Dont drive')
//     }
// else if(light == 'yellow'){
//     console.log('get ready')    
// } else {
//     console.log('The light is not green, orange, or red');
//     }

// var age = 12;


// if (age >= 65) {
//     console.log("You get your income from your pension")
// }
// else if (age < 65 && age >= 18) {
//     console.log("Each month you get a salary")
// }
// else if (age < 18) {
//     console.log('You get an allowance')
//   }
// else {
//     console.log("The value of the age variable is not numerical")
    
// }
















// var day = 'monday'
// switch (day) {
//     case 'monday':
//         console.log('Today its monday')
//         break;
//     case 'Tuesday':
//         console.log('Today its tuesday')
//         break;
//     case 'wednesday':
//         console.log('Today its Wednesday')
//         break;
//     case 'Thursday':
//         console.log('Today its Thursday')
//         break;
//     case 'Friday':
//         console.log('Today its friday')
//         break;
//     case 'saturday':
//         console.log('Today its saturday')
//         break;
//     case 'sunday':
//         console.log('Today its monday')
//         break;
//     default:
//         console.log('Its neither days of the week')
//         break;
// }

const name = ['yahya'];
const t0 = performance.now()
function findName(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'yahya') {
         console.log('found Name')
        }
    }
    const t1 = performance.now()
    console.log(`it took the code ${t1-t0} miliseconde to run`)
}

findName(name)

    ||||
    ////
