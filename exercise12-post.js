const express = require("express");

const app = express();

const port = 3000;
app.use(express.json())


function countBmi(tinggi, berat) {
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

app.post('/bmi', (req, res) => {
    let newFamily = req.body
    let bmi = countBmi(newFamily.tinggi, newFamily.berat)
    let cat = category(bmi)

    res.json({
        nama: newFamily.nama,
        tinggi: newFamily.tinggi,
        berat: newFamily.berat,
        bmi: bmi,
        category: cat
    })
})


app.listen(port, () => {
    
    console.log(`Example app listening at http://localhost:${port}`);
})