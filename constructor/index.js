
// Classe que vai construir objetos que sao animais mamiferos



class Mammal {
    constructor(species, name, age) {
        this.species = species
        this.name = name
        this.mammaryGland = true
        this.age = age
    }

    incrementAge () {
        this.age++
    }
}

class Lion extends Mammal {
    eatZebra (animals) {
        return animals.filter(animal => animal.species !== 'zebra')
    }
}


const zeca = new Mammal('zebra', 'zeca', 11)
const pompeu = new Mammal('gnu', 'Pompeu', 5)
const agnus = new Mammal('cavalo', 'Agnus', 3)
const mufasa = new Lion('Leao', 'Mufasa', 9)

const animals = [zeca, pompeu, agnus]

console.log(mufasa.eatZebra(animals))