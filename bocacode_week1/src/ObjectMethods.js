let pet = {
    name : 'Helya',
    species : 'fox',
    size : 'small',
    age : 2,
    speak(person){
        (person)
        ? console.log(`huffhuffuff, ${person} isn't giving me attention`)
        : this.growl()
    },
    growl(){
        console.log(`hekekhek`)
    },
}
pet.speak()
console.log(pet.name)