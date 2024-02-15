const Blog = require('../models/blog');

// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = async (req, res) => {
    try {
        const result = await Blog.find().sort({ createdAt: -1 });
        res.render('./blogs/index', { title: 'All blogs', blogs: result })
    } catch (error) {
        console.log(error);
    }
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then((result) => {
        res.render('./blogs/details', { blog: result, title: 'Blog Details' });
    }).catch((err) => {
        // console.log(err)
        res.status(400).render('404', { title: 'Blog not found' });
    })
}

const blog_create_get = (req, res) => {
    res.render('./blogs/create', { title: 'Create a new Blog' });
}

const blog_create_post = async (req, res) => {
    const blog = new Blog(req.body);
    // blog.save().then((result) => {
    //     res.redirect('/blogs');
    // }).catch((err) => {
    //     console.log(err);
    // })

    try {
        const result = await blog.save();
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id).then((result) => {
        res.json({ redirect: '/blogs' })
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
}