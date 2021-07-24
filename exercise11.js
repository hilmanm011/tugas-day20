const express = require("express");

const app = express();

const port = 3000;


let familys = [
    {
        nama: 'Muhamad',
        tinggi: 1.66,
        berat: 55,
    },
    {
        nama: 'Hilman',
        tinggi: 1.65,
        berat: 45,
    }
]


function countBmi(berat, tinggi) {
    let result = 0
    result += berat / (tinggi ** 2)

    return result.toFixed(1)
}

function category(input) {
    if (input < 18.5) {
        return 'Under Weight'
    } else if (input >=18.5 && input <= 24.9) {
        return 'Normal Weight'
    } else if (input >= 25 && input <= 29.9) {
        return 'Over Weight'
    } else{
        return 'Obesity'
    }

}

app.get('/bmi', (req, res) => {
    let newObj = []
    for (family of familys) {

        let bmi = countBmi(family.berat, family.tinggi)
        let cat = category(bmi)

        newObj.push({
            nama: family.nama,
            tinggi: family.tinggi,
            berat: family.berat,
            bmi: bmi,
            category: cat
        })  
    }
    res.json(newObj)
})

app.listen(port, () => {
    
    console.log(`Example app listening at http://localhost:${port}`);
})