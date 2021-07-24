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

module.exports = {
    countBmi,
    category
}