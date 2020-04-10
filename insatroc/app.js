const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});
app.post('/test',(req,res) => {
    console.log(4)
    res.send('InsaTroc is Alive !')
})

app.listen(3000, () => console.log('Gator app listening on port 3000!'));