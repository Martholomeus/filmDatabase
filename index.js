console.log('test');

// const mongoose = require('mongoose')


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// mongoose.connect('mongodb+srv://film:hXZU9wTJdpxdxVG6@cluster0.zhpub.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true }).catch(err => console.log(err));
// mongoose.connection.once('open', () => {
//     console.log('connected to database');
// });



function submitForm(event) {
    event.preventDefault()
    var title = document.getElementById('title');
    var yearOfRelease = document.getElementById('yearOfRelease');
    var genre = document.getElementById('genre');
    var rating = document.getElementById('rating');
    var comment = document.getElementById('comment');

    var film = {
         title: title.value,
        yearOfRelease: yearOfRelease.value,
        genre: genre.value,
        rating: rating.value,
        comment: comment.value
    }

    console.log(film);
}