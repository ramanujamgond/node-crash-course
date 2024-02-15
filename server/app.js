const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to monogdb
const dbURI = 'mongodb+srv://ramanujamgond:PbXSijVfefKsCVNJ@cluster0.8mzbi2t.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3002))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// listen for requests
// app.listen(3002);

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next();
// });

// app.use(morgan('tiny'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'Another title',
//         snippet: 'About the new blog title',
//         body: 'more about the blog content',
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => {
//             console.log(err);
//         })
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', async (req, res) => {
//     try {
//         const result = await Blog.find();
//         res.send(result);
//     } catch (err) {
//         console.log(err);
//     }
// });


// app.get('/single-blog', (req, res) => {
//     Blog.findById('65c778adaa11d8ac97f47c2e').then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     });
// });


app.get('/', (req, res) => {
    // res.send('<p>Home Page</>');
    // res.sendFile('./views/index.html', { root: __dirname });
    res.redirect('/blogs');

    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolar sit amet consectetur' },
    //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolar sit amet consectetur' },
    //     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolar sit amet consectetur' },
    // ]
    // // res.render('index', { title: 'Home', blogs: blogs });
    // res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About Us' })
});

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about')
// });

// 404 not found page
// app.get('*', (req, res) => {
//     res.sendFile('./views/404.html', { root: __dirname });
// })

// blog routes
app.use('/blogs', blogRoutes);

app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' });
})