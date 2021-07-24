const express = require("express");

const app = express();

const port = 3000;

app.use(express.json())


function kurs(sc, sa, tc) {
    let result = sa

    if (sc === 'IDR' && tc === 'USD') {
        return (result * 0.000069).toFixed(2)
    }else if (sc === 'IDR' && tc === 'SGD') {
        return (result * 0.000094).toFixed(2)
    } else if (sc === 'IDR' && tc === 'MYR') {
        return (result * 0.00029).toFixed(2)
    } else if (sc === 'IDR' && tc === 'JPY') {
        return (result * 0.0076).toFixed(2)

    } else if (sc === 'USD' && tc === 'IDR') {
        return (result * 14_475.15).toFixed(2)
    } else if (sc === 'USD' && tc === 'JPY') {
        return (result * 110.55).toFixed(2)
    } else if (sc === 'USD' && tc === 'MYR') {
        return (result * 4.23).toFixed(2)
    } else if (sc === 'USD' && tc === 'SGD') {
        return (result * 4.23).toFixed(2)

    }else if (sc === 'SGD' && tc === 'IDR') {
        return (result * 10_633.02).toFixed(2)
    }else if (sc === 'SGD' && tc === 'JPY') {
        return (result * 81.21).toFixed(2)
    }else if (sc === 'SGD' && tc === 'MYR') {
        return (result * 3.10).toFixed(2)
    }else if (sc === 'SGD' && tc === 'USD') {
        return (result * 0.73).toFixed(2)

    }else if (sc === 'MYR' && tc === 'IDR') {
        return (result * 3_424.86).toFixed(2)
    }else if (sc === 'MYR' && tc === 'JPY') {
        return (result * 26.17).toFixed(2)
    }else if (sc === 'MYR' && tc === 'SGD') {
        return (result * 0.32).toFixed(2)
    }else if (sc === 'MYR' && tc === 'USD') {
        return (result * 0.24).toFixed(2)

    }else if (sc === 'JPY' && tc === 'IDR') {
        return (result * 130.93).toFixed(2)
    }else if (sc === 'JPY' && tc === 'MYR') {
        return (result * 0.038).toFixed(2)
    }else if (sc === 'JPY' && tc === 'SGD') {
        return (result * 0.012).toFixed(2)
    }else if (sc === 'JPY' && tc === 'USD') {
        return (result * 0.0090).toFixed(2)
    }else {
        return 'not found'
    }
    
}

app.post('/exchange', (req, res) => {

    let sc = req.body.sourceCurrency
    let sa = req.body.sourceAmount
    let tc = req.body.targetCurrency

    let ta = kurs(sc,sa,tc)
    
    res.json({
        sourceCurrency: sc,
        sourceAmount: sa,
        targetCurrency: tc,
        targetAmount: ta
    })
})

app.use('/', (req, res) => {
    res.send('Not Found')
})


app.listen(port, () => {
    
    console.log(`Example app listening at http://localhost:${port}`);
})