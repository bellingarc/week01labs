const painters = [
  { name: 'Pablo', lastName: 'Picasso', born: 1881, passed: 1973 },
  { name: 'Salvador', lastName: 'Dali', born: 1904, passed: 1989 },
  { name: 'Frida', lastName: 'Kahlo', born: 1907, passed: 1954 },
  { name: 'Henri', lastName: 'Matisse', born: 1869, passed: 1954 },
  { name: 'Gustav', lastName: 'Klimt', born: 1862, passed: 1918 },
  { name: 'Jackson', lastName: 'Pollock', born: 1912, passed: 1956 },
  { name: 'Judy', lastName: 'Chicago', born: 1939, passed: null },
  { name: 'Kara', lastName: 'Walker', born: 1969, passed: null },
  { name: 'Wassily', lastName: 'Kandinsky', born: 1866, passed: 1944 },
];

// 1. give list of painters that were born in the 19 century
const filteredPainters = painters.filter(painter => painter.born < 1900 && painter.born >= 1800)
console.table(filteredPainters)
// 2. give list of painters names and last names 
const paintersNames = painters.map(painter => painter.name + ' ' + painter.lastName)
console.log(paintersNames)

// 3. sort painters alphabetically by last names
const sortedPainters = painters.sort((a,b) => a.lastName < b.lastName ? -1 : 1)
console.log(sortedPainters)
// 4. give list of painters that names or last names start with K?
const paintersNamedK = painters.filter(painter => painter.lastName[0].toUpperCase() === 'K')
console.table(paintersNamedK)
// 5. print names of painters that that are still alive
// and their current age
let today = new Date()
let yyyy = today.getFullYear()
const livingPainters = painters.filter(painter => painter.passed == null 
  ? console.log(`${painter.name} ${painter.lastName} is currently ${yyyy - painter.born} years old.`): '')
// 6. give list of painters that contain 'li' in their name 
const paintersWithLi = painters.filter(painter => (painter.name.toLowerCase().includes('li') 
|| painter.lastName.toLowerCase().includes('li'))) 
console.log(paintersWithLi)
// 7. sort painters by birth date, from oldest to youngest
const paintersSortedByAge = painters.sort((a,b) => a.born < b.born ? -1 : 1)
console.log(paintersSortedByAge)


const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
]
// sort all bands not taking into account the articles (a, the, an)
const remov = ['A','The','An']
// const modBands = bands.sort((a,b) => 
// (a.split(' ').filter(w => !remov.includes(w)).join(' '))
// >(b.split(' ').filter(w => !remov.includes(w)).join(' '))
// ? 1 
// : -1)

let modBands = bands.map(band => band.split(' ').filter(w => !remov.includes(w)).join(' ')).sort((a,b) => a > b ? 1:-1)
console.log(modBands)