let matematika = {
    tambah: function (a, b) {
        let result = a + b
        console.log(`hasil dari ${a} + ${b} = ${result}`)
    },
    pengurangan: function (a, b) {
        let result = a - b
        console.log(`hasil dari ${a} - ${b} = ${result}`)
    },
    pembagian: function (a, b) {
        let result = a / b
        console.log(`hasil dari ${a} : ${b} = ${result}`)
    },
    perkalian: function (a, b) {
        let result = a * b
        console.log(`hasil dari ${a} * ${b} = ${result}`)
    },
}

matematika.tambah(3, 18)
matematika.pengurangan(3, 18)
matematika.pembagian(3, 18)
matematika.perkalian(3, 18)