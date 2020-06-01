import express from 'express';

const app = express();

app.get('/users', (req, res) =>{
    return (
        res.json([
            'Luiz',
            'Diego',
            'Sla',
            'Daniel'
        ])
    );
});

app.listen(3333);