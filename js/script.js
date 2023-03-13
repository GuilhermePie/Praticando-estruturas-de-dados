//-------------------------------------------------------------------------------------
// function dec2Bin(decNumber){//23
//     var restStack = [],
//     rest,
//     binaryString = ''

//     while(decNumber > 0 ){//23 - 11 - 5 - 2 - 1
//         rest = Math.floor(decNumber % 2)//resto da divisão é 1 - 1 - 1 - 0 - 1
//         restStack.push(rest)//[1,1,1,0,1]
//         decNumber = Math.floor(decNumber / 2)//11 - 5 - 2 - 1 - 0
//     }

//     while(restStack.length > 0){//5 - 4 - 3 - 2 - 1
//         binaryString += restStack.pop().toString()//'10111'
//     }

//     return binaryString
// }

// console.log(dec2Bin(23))
//-------------------------------------------------------------------------------------




//-------------------------------------------------------------------------------------
// function baseConverter(decNumber, base){//123 . 16
//     var restStack = [],
//     rest,
//     baseString = '',
//     digits = '0123456789ABCDEF'

//     while(decNumber > 0){//123 - 7
//         rest = Math.floor(decNumber % base)//qual o resto? (11)-(7)
//         restStack.push(rest)//[11,7]
//         decNumber = Math.floor(decNumber / base)//7 , 0
//     }

//     while(restStack.length > 0){//tamanho do nosso array é maior ? (2)-(1)
//         baseString += digits[restStack.pop()]//7 - 11 / 7B
//     }
//     return baseString
// }

// //numero será convertido de acordo com a BASE hexadecimal, octadecimal ou binaria (numero, base hexadecimal, octadecimal ou binaria(16, 8 ou 2))
// console.log(baseConverter(113, 2))
//-------------------------------------------------------------------------------------
