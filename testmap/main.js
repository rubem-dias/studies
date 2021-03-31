var myData = [
    {
        "id": 1,
        "name": "Rubem",
        "years": 21
    },
    {
        "id": 2,
        "name": "Vini",
        "years": 32
    },
    {
        "id": 3,
        "name": "Let",
        "years": 26
    }
]

var myDataRender = myData.map(person => { 
    console.log(`id: ${person.id} | nome: ${person.name} | idade: ${person.years}`)
})

var myFunc = () => {
    var p1 = document.getElementById("arrayDone")
}