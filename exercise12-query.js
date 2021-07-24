const express = require("express");

const app = express();

const port = 3000;


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
    let obj = []
    let nama = req.query.nama
    let tinggi = req.query.tinggi
    let berat = req.query.berat

    let bmi = countBmi(berat, tinggi)
    let cat = category(bmi)

        obj.push({
            nama: nama,
            tinggi: tinggi,
            berat: berat,
            bmi: bmi,
            category: cat
        })
    res.json(obj)
})

app.listen(port, () => {
    
    console.log(`Example app listening at http://localhost:${port}`);
})