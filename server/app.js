const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3002);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</>');
    // res.sendFile('./views/index.html', { root: __dirname });
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolar sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolar sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolar sit amet consectetur' },
    ]
    // res.render('index', { title: 'Home', blogs: blogs });
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About Us' })
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
})

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about')
// });

// 404 not found page
// app.get('*', (req, res) => {
//     res.sendFile('./views/404.html', { root: __dirname });
// })

app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' });
})