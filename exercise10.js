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


app.get('/profile', (req, res) => {
    res.json(familys)
})

app.listen(port, () => {
    
    console.log(`Example app listening at http://localhost:${port}`);
})