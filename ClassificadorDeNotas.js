

function getNote(note){
    let highNote = note >= 90.0
let mediumNote = note >= 80  && note <= 89
let lowNote = note >= 70  && note <= 79
let veryLowNote = note >= 60 && note <= 69
let lowerNote = note < 60 && note >= 0

let finalNote;

if(highNote) {
    finalNote ='A'
} else if(mediumNote) {
    finalNote = 'b'
} else if(lowNote) {
    finalNote = 'c'} 
 else if(veryLowNote) {
    finalNote = 'd'
} else if(lowerNote) {
    finalNote = 'f'
} else {
    finalNote = 'Nota invalida'
}

return finalNote
}

console.log(getNote(101))
console.log(getNote(-1))
console.log(getNote(0))
console.log(getNote(1))
console.log(getNote(45))
console.log(getNote(60))
console.log(getNote(76))
console.log(getNote(85))
console.log(getNote(95))