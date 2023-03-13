//-----------------------------------------------------------
// var avgTemp = []

// avgTemp[0] = 31.9 
// avgTemp[1] = 35.3
// avgTemp[2] = 42
// avgTemp[3] = 38
// avgTemp[4] = 25.5

// console.log(avgTemp[1])

// var daysOfWeek = ['Sunday','munday','tuesday','wednesday','thursday','friday','saturday']

// console.log(daysOfWeek.length)

// for(var i = 0; i < daysOfWeek.length; i++){
//    console.log(daysOfWeek[i])
// }
//-----------------------------------------------------------



//-----------------------------------------------------------
// var fibonacci = [0,1,1]

// fibonacci[0] = 0
// fibonacci[1] = 1
// fibonacci[2] = 1

// for(var i = 3; i < 20; i++){
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
// }

// console.log(fibonacci)

// for(var i = 0; i < fibonacci.length; i++){
//     console.log(fibonacci[i])
// }
//-----------------------------------------------------------



//-----------------------------------------------------------
//var numbers = [0,1,2,3,4,5,6,7,8,9] 

// Acrescenta elementos a array
// numbers.push(10)

// Acrescenta elementos ao inicio da array
// numbers.unshift(-1) 

// Retira o ultimo elemento da array
// numbers.pop()

// Retira o primeiro elemento da array
// numbers.shift()

// Remove e adiciona elementos 

// splice(3,2)(casa inicial, quantas casas serão retiradas)
// splice(3,0,1,2,3,4)(casa inicial, quantas casas serão retiradas, items a serem adcionados apos a casa inicial)
// numbers.splice(3, 0, 1,2,3)
//console.log(numbers)
//-----------------------------------------------------------



//-----------------------------------------------------------
//arrays bi-dimensionais
// var avgTempWeek = []

// var avgTempWeek1 = [33,34,35,23,26,27,28]
// var avgTempWeek2 = [42,23,12,13,24,34,32]

// avgTempWeek[0] = avgTempWeek1
// avgTempWeek[1] = avgTempWeek2

// console.log(avgTempWeek[0][5])
//-----------------------------------------------------------



//-----------------------------------------------------------
// Array multidimensional
// var month = []

// var fristWeeks = []
// var lastWeeks = []

// var avgTempWeek1 = [33,34,35,23,26,27,28]
// var avgTempWeek2 = [42,23,12,13,24,34,32]
// var avgTempWeek3 = [36,13,14,15,18,20,28]
// var avgTempWeek4 = [5,23,12,33,14,24,22]

// fristWeeks = [avgTempWeek1, avgTempWeek2] 
// lastWeeks = [avgTempWeek3, avgTempWeek4] 

// month = [fristWeeks, lastWeeks]

// console.log(month[0][0][6])

// for(var x = 0; x < month.length; x++){
//     for(var y = 0; y < month[x].length; y++){
//         for(var z = 0; z < month[x][y].length; z++){
//             console.log(month[x][y][z])
//         }       
//     }
// }
//-----------------------------------------------------------