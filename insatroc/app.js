const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});
app.post('/test',(req,res) => {
    console.log(req);
    //To do : Extract the ''data'' from the req !
    console.log('Got something !')
    res.json({response:'InsaTroc is Alive !'})
});

app.route('/post-viewer/:id').get((req, res) => {
  const postID = req.params['id'];
  res.send({id: postID});
})

app.listen(3000, () => console.log('Gator app listening on port 3000!'));
