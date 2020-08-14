const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, res) => {
    res.json({
        text: 'api wolks'
    })
});

// Creando un Token
app.post('/api/login', (req, res) => {
    const user = {id: 3};
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
        token
    })
});

app.get('/api/protected', ensureToken, (req, res) => {
    jwt.verify(req.token, 'my_secret_key', (err, data) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                text: 'protected',
                data    
            })
        }
    })
});

// Verificando si el usuario creo un token
function ensureToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if(typeof bearerHeader !== 'undefined') { // typeof => tipo de dato
        const bearer = bearerHeader.split(" "); // name: eung => [name, eung]
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403); // No permitido
    }
}

app.listen(3000, () => {
    console.log('Server on Port 3000')
});